import { Component, OnInit, Output, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.scss']
})
export class ShoppingCartButtonComponent implements OnInit {

  public amountOfItemsInCart: number;
  constructor(private el: ElementRef, private cd: ChangeDetectorRef, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  openShoppingCart() {
    this.shoppingCartService.toggle();
  }

}
