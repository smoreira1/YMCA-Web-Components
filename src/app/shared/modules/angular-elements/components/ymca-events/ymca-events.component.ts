import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { YMCAEvent } from '@shared/interfaces/ymca-event.interface';
import { GeoCode } from '@shared/interfaces/geocode.interface';
import { DayAvailability } from '@shared/interfaces/day-availability.interface';
import { Observable, Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { BrowserConfigService } from '@shared/services/browser-config/browser-config.service';
import { YMCAEventFacade, YMCAEventsState } from '@core/facades/ymca-events/ymca-event.facade';
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
  };

  public events$: Observable<YMCAEvent[]>;
  public loadingError$ = new Subject<boolean>();
  public geoCode: GeoCode;
  public dayAvailability: DayAvailability;
  public geoCodeFlag: string;
  public browserNotSupported = false;
  public browserErrorCookiesDisabled = false;
  @ViewChild('filtersnav') public sidenav: MatSidenav;


  vm$: Observable<YMCAEventsState> = this.ymcaEventsFacade.vm$;
  constructor(
    private browserConfigService: BrowserConfigService,
    private ymcaEventsFacade: YMCAEventFacade) {

  }

  ngOnInit() {
    if (this.browserConfigService.isInternetExplorer()) {
      this.browserNotSupported = true;
    }
    else if (!this.browserConfigService.isCookiesEnabled()) {
      this.browserErrorCookiesDisabled = true;
    }
    else {

    }
  }




  public configureDays() {
    this.dayAvailability = {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    };
  }

}
