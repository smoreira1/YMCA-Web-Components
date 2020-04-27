import { Injectable, Output, EventEmitter } from '@angular/core';
import { YMCAEvent } from '../interfaces/ymca-event.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DayAvailability } from '../interfaces/day-availability.interface';
import { retry, catchError, map, tap, timeout } from 'rxjs/operators';
import { GeoCode } from '../interfaces/geocode.interface';
import { APIResponse } from '../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class YMCAEventsService {

  private endpoint = environment.apiPath;
  @Output() change: EventEmitter<Array<YMCAEvent>> = new EventEmitter();
  constructor(private http: HttpClient) { }

  public getEvents(
    tag: string,
    geoFlag: string,
    geoCode: GeoCode,
    dayAvaliability: DayAvailability,
    zipcode?: string,
    distance?: string,
    age?: string,
    startingTime?: string,
    endingTime?: string): Observable<any> {
      console.log(arguments);
    return this
      .http
      .get<any>(`${this.endpoint}/YmcaEvents?tag=${tag}&zipcode=${zipcode}&distance=${distance}&age=${age}&startingTime=${startingTime}&endingTime=${endingTime}&monday=${dayAvaliability.Monday}&tuesday=${dayAvaliability.Tuesday}&wednesday=${dayAvaliability.Wednesday}&thursday=${dayAvaliability.Thursday}&friday=${dayAvaliability.Friday}&saturday=${dayAvaliability.Saturday}&sunday=${dayAvaliability.Sunday}&geoFlag=${geoFlag}&lat=${geoCode.latitude}&lon=${geoCode.longitude}`)
      .pipe(
        timeout(30000),
        tap(data => console.log(JSON.parse(data))),
        map(response => {  // NOTE: response is of type SomeType
          // Does something on response.data
          // modify the response.data as you see fit.
          // return the modified data:
          // console.log('Events!:');
          // console.log(response);
          const newResponse = JSON.parse(response);
          return newResponse.data; // kind of useless
      }),
        catchError(
          e => {
        // do something on a timeout
        console.log(e);
        return this.handleError();
      }
          )
     ); // end of pipe
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    private log(message: string) {
      console.log('test');
      //this.messageService.add(`HeroService: ${message}`);
    }

}
