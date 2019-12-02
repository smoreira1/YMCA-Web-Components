import { Component, OnInit, Input, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild } from '@angular/core';
import { YMCAEvent } from 'src/app/interfaces/ymca-event.interface';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';
import { GeoCode } from 'src/app/interfaces/geocode.interface';
import { DayAvailability } from 'src/app/interfaces/day-availability.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APIResponse } from 'src/app/interfaces/api-response.interface';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { MatSidenav } from '@angular/material';
import { BrowserConfigService } from 'src/app/services/browser-config.service';

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
  @Input() cardStyle: string;
  @Input() cardDensity: string;

  public state = {
    visible: false,
    loaded: false,
    maintenance: false,
    empty: false,
  };

  public filters = {
    zipcode: '32825',
    age: '99',
    distance: '50',
    time: '',
    dayAvailability: '',
    tag: '',
    startingTime: '12:00 AM',
    endingTime: '11:59 PM',
  }

  public events$: Observable<YMCAEvent[]>;
  public geoCode: GeoCode;
  public dayAvailability: DayAvailability;
  public geoCodeFlag: string;
  public browserNotSupported: boolean;
  public browserErrorCookiesDisabled: boolean;
  @ViewChild('filtersnav', { static: false }) public sidenav: MatSidenav;

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    private eventsService: YMCAEventsService,
    private shoppingCartService: ShoppingCartService,
    private browserConfigService: BrowserConfigService) {
      this.browserErrorCookiesDisabled = false;
      this.browserNotSupported = false;
    }

  ngOnInit() {
    if (this.browserConfigService.isInternetExplorer()) {
      this.browserNotSupported = true;
    }
    else if (!this.browserConfigService.isCookiesEnabled()) {
      this.browserErrorCookiesDisabled = true;
    }
    else {
      this.shoppingCartService.setSidenav(this.sidenav);
      this.tag = 'Teen Adult Stroke Technique';
      this.configureDays();
      this.getEvents();
    }
  }

  public getEvents() {
    const geoCode = {
      latitude: '80',
      longitude: '20',
    }
    console.log('Getting Events:');
    this.events$ = this.eventsService.getEvents(
      this.tag,
      this.geoCodeFlag,
      geoCode,
      this.dayAvailability,
      this.filters.zipcode,
      this.filters.distance,
      this.filters.age,
      this.filters.startingTime,
      this.filters.endingTime);
      console.log('Events:');
      console.log(this.events$);
  }


  configureDays() {
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

  public test() {
    console.log(this.events$);
  }

  public setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }


}
