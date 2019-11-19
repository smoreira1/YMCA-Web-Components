import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ShoppingCartService } from './components/angular-elements/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ebiz-elements';
  @ViewChild('sidenav', { static: false }) public sidenav: MatSidenav;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    const eventCard = document.createElement('app-ymca-event-card');
    const content = document.getElementById('ymca-components');
    content.appendChild(eventCard);

    const newEventCard = document.createElement('app-ymca-event-card');
    const event = {
      id: 'eventId',
      description: 'descrioption1',
      createdDate: 'createdDate',
      startDate: new Date(2018, 11, 24, 10, 33, 30, 0),
      endDate: new Date(2018, 11, 24, 10, 33, 30, 0),
      startDateTime: '11:00 AM',
      endDateTime: '12: 00 PM',
      location: 'Winter Park',
      memberOnly: true,
      memberPrice: '$100',
      startingAge: 18,
      startingAgeType: 'years',
      endingAge: 28,
      endingAgeType: 'years',
      highGrade: '8th',
      lowGrade: '5th',
      nonMemberPrice: '$200',
      gender: 'Male',
      remainingSlots: '10',
      dayAvailability: {
        Monday: false,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true,
      },
      season: 'N/A',
      zipcode: '32825',
      distanceToEvent: 20,
      parentProduct: 'Parent Product Woot Woot',
      numberOfClassesPerWeek: 2,
    }
    newEventCard.setAttribute('description', 'testDescription');
    content.appendChild(newEventCard);

  }

}
