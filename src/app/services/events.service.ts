import { Injectable, Output, EventEmitter } from '@angular/core';
import { YMCAEvent } from '../interfaces/ymca-event.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private endpoint = ''
  @Output() change: EventEmitter<Array<YMCAEvent>> = new EventEmitter();
  constructor() { }

  // refreshEvents(): Observable<any>{
  //   // return this.http.get(endpoint + 'products').pipe(
  //   //   map(this.extractData));
  // }
}
