import { Component, OnInit } from '@angular/core';
import { YMCAEventFacade, YMCAEventsState } from '@core/facades/ymca-events/ymca-event.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results-meta-data',
  templateUrl: './search-results-meta-data.component.html',
  styleUrls: ['./search-results-meta-data.component.scss']
})
export class SearchResultsMetaDataComponent implements OnInit {

  public eventsAmount;
  public locationAmount;

  public vm$: Observable<YMCAEventsState> = this.ymcaEventFacade.vm$;
  constructor(private ymcaEventFacade: YMCAEventFacade) {


  }

  ngOnInit() {
  }

}
