import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.scss']
})
export class ShoppingCartButtonComponent implements OnInit {

  public amountOfItemsInCart: number;
  constructor(private ymcaEventsService: YMCAEventsService, private cartService: CartService) { }

  ngOnInit() {
  }

  openShoppingCart(){
    this.cartService.openShoppingCart();
  }
}
