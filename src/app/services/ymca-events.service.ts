import { Injectable, Output, EventEmitter } from '@angular/core';
import { YMCAEvent } from '../interfaces/ymca-event.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { DayAvailability } from '../interfaces/day-availability.interface';
import { retry, catchError } from 'rxjs/operators';
import { GeoCode } from '../interfaces/geocode.interface';


@Injectable({
  providedIn: 'root'
})
export class YMCAEventsService {

  private endpoint = environment.apiPath;
  @Output() change: EventEmitter<Array<YMCAEvent>> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getEvents(
    tag: string,
    geoFlag: string,
    geoCode: GeoCode,
    dayAvaliability: DayAvailability,
    zipcode?: string,
    distance?: string,
    age?: string,
    startingTime?: string,
    endingTime?: string): Observable<any>{
    return this
    .http
    .get(`${this.endpoint}/YMCAEvents?tag=${tag}&zipcode=${zipcode}&distance=${distance}&age=${age}&startingTime=${startingTime}&endingTime=${endingTime}&monday=${dayAvaliability.Monday}&tuesday=${dayAvaliability.Tuesday}&wednesday=${dayAvaliability.Wednesday}&thursday=${dayAvaliability.Thursday}&friday=${dayAvaliability.Friday}&saturday=${dayAvaliability.Saturday}&sunday=${dayAvaliability.Sunday}&geoFlag=${geoFlag}&lat=${geoCode.latitude}&lon=${geoCode.longitude}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
