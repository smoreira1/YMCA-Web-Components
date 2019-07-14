import { Component, OnInit, Input } from '@angular/core';
import { YMCAEvent } from 'src/app/interfaces/ymca-event.interface';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';
import { GeoCode } from 'src/app/interfaces/geocode.interface';
import { DayAvailability } from 'src/app/interfaces/day-availability.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ymca-events',
  templateUrl: './ymca-events.component.html',
  styleUrls: ['./ymca-events.component.scss']
})
export class YmcaEventsComponent implements OnInit {

  @Input() zipcode: string;
  @Input() distance: string;
  @Input() age: string;
  @Input() time: string;
  @Input() monday: string;
  @Input() tuesday: string;
  @Input() wednesday: string;
  @Input() thursday: string;
  @Input() friday: string;
  @Input() saturday: string;
  @Input() sunday: string;
  @Input() tag: string;
  @Input() startingTime: string;
  @Input() endingTime: string;

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
    tag: '',
    startingTime: '',
    endingTime: '',
  }

  public events: Observable<YMCAEvent>;
  public geoCode: GeoCode;
  public dayAvailability: DayAvailability;
  public geoCodeFlag: string;

  constructor(private eventsService: YMCAEventsService) { }

  ngOnInit() {
    this.configureDays();
    this.geoCode.latitude = '80';
    this.geoCode.longitude = '30';
    this.events = this.eventsService.getEvents(
      this.tag,
      this.geoCodeFlag,
      this.geoCode,
      this.dayAvailability,
      this.zipcode,
      this.distance,
      this.age,
      this.startingTime,
      this.endingTime,
    );
  }

  getEvents(){
    this.events = null;
  }

  configureDays(){
    this.dayAvailability = {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    }
  }

}
