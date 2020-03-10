import { Component, OnInit } from '@angular/core';
import { ShoppingCartFacade, ShoppingCartState } from '@core/facades/shopping-cart/shopping-cart.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.scss']
})
export class ShoppingCartButtonComponent implements OnInit {

  // Note: this is of type string so we may easily interpolate empty string in the scenario of a zero item cart.
  vm$: Observable<ShoppingCartState> = this.shoppingCartFacade.vm$;
  constructor(
    private shoppingCartFacade: ShoppingCartFacade
  ) { }

  ngOnInit() {

  }

  toggleShoppingCart(){
    console.log('Toggle Shopping Cart');
  }
}
