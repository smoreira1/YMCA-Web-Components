import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { YMCAEvent } from '../../interfaces/ymca-event.interface';

@Component({
  selector: 'app-ymca-event-card',
  templateUrl: './ymca-event-card.component.html',
  styleUrls: ['./ymca-event-card.component.scss']
})
export class YmcaEventCardComponent implements OnInit {

  @Input() ymcaEvent: YMCAEvent;

  @Input() id: string;
  // id: string;
  @Input() description: string;
  // createdDate: string;
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() startDateTime: string;
  @Input() endDateTime: string;
  @Input() location: string;
  // memberOnly: boolean;
  @Input() memberPrice: string;
  // startingAge: number;
  // startingAgeType: string;
  // endingAge: number;
  // endingAgeType: string;
  // highGrade: string;
  // lowGrade: string;
  // nonMemberPrice: string;
  // gender: string;
  // remainingSlots: number;
  // dayAvailability: DayAvailability;
  // season: string;
  // zipcode: string;
  // distanceToEvent: number;
  @Input() parentProduct: string;
  // numberOfClassesPerWeek: number;
  @Output() addItemToCart = new EventEmitter();
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(itemId: string){
    this.cartService.addCartItem(itemId);
  }

}
