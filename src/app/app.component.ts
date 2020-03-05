import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'YMCA Components';
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
    // const eventCard = document.createElement('app-ymca-event-card');
    // const viewStyleBar = document.createElement('app-view-style-bar');


    // const content = document.getElementById('ymca-components');
    // content.appendChild(eventCard);
    // //content.appendChild(viewStyleBar);

    // const newEventCard = document.createElement('app-ymca-event-card');
    // newEventCard.setAttribute('description', 'testDescription');
    // content.appendChild(newEventCard);

  }

}
