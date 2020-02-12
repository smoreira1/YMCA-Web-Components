import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ShoppingCartService } from './components/angular-elements/shopping-cart/shopping-cart.service';
//import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'YMCA Components';
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private shoppingCartService: ShoppingCartService) { }

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
