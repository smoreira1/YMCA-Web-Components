import { Component, OnInit } from '@angular/core';
import { YMCAEvent } from 'src/app/interfaces/ymca-event.interface';

@Component({
  selector: 'app-ymca-events',
  templateUrl: './ymca-events.component.html',
  styleUrls: ['./ymca-events.component.scss']
})
export class YmcaEventsComponent implements OnInit {

  public state = {
    visible: false,
    loaded: false,
    maintenance: false,
    empty: false,
  };

  public filters = {
    zipcode: '',
    age: '',
    distance: '',
    time: '',
    dayAvailability: '',
  }

  public events: Array<YMCAEvent>;

  constructor() { }

  ngOnInit() {
  }

  getEvents(){
    this.events = null;
  }

}
