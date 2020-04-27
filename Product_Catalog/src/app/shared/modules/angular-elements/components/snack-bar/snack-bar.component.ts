import { Component, OnInit } from '@angular/core';
import { ShoppingCartFacade, ShoppingCartState } from '@core/facades/shopping-cart/shopping-cart.facade';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
