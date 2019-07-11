import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


}
