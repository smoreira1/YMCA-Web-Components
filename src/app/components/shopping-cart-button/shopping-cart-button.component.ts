import { Component, OnInit, Output, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.scss']
})
export class ShoppingCartButtonComponent implements OnInit {

  // Note: this is of type string so we may easily interpolate empty string in the scenario of a zero item cart.
  public amountOfItemsInCart: string;
  constructor(
    private el: ElementRef, 
    private cd: ChangeDetectorRef, 
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.amountOfItemsInCart = this.shoppingCartService.getItemsInShoppingCart() || '';
  }

  openShoppingCart() {
    this.shoppingCartService.toggle();
  }

}
