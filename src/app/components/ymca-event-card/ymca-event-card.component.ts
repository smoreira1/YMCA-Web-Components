import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { YMCAEvent } from '../../interfaces/ymca-event.interface';

@Component({
  selector: 'app-ymca-event-card',
  templateUrl: './ymca-event-card.component.html',
  styleUrls: ['./ymca-event-card.component.scss']
})
export class YmcaEventCardComponent implements OnInit {

  @Input() ymcaEvent: YMCAEvent;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(itemId: string){
    this.cartService.addCartItem(itemId);
  }

}
