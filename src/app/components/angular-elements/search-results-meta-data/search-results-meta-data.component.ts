import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results-meta-data',
  templateUrl: './search-results-meta-data.component.html',
  styleUrls: ['./search-results-meta-data.component.scss']
})
export class SearchResultsMetaDataComponent implements OnInit {

  public eventsAmount;
  public locationAmount;

  constructor() { }

  ngOnInit() {
  }

}
