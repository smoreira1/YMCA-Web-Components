import { Component, OnInit } from '@angular/core';
import { YMCAEventFacade } from '@core/facades/ymca-event.facade';

@Component({
  selector: 'app-search-results-meta-data',
  templateUrl: './search-results-meta-data.component.html',
  styleUrls: ['./search-results-meta-data.component.scss']
})
export class SearchResultsMetaDataComponent implements OnInit {

  public eventsAmount;
  public locationAmount;

  constructor(eventsFacade: YMCAEventFacade) {


   }

  ngOnInit() {
  }

}
