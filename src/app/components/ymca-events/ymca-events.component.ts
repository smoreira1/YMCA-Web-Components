import { Component, OnInit } from '@angular/core';
import { YMCAEvent } from 'src/app/interfaces/ymca-event.interface';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';

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

  constructor(private eventsService: YMCAEventsService) { }

  ngOnInit() {
  }

  getEvents(){
    this.events = null;
  }

}
