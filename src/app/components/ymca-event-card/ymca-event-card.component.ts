import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  ElementRef, } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-ymca-event-card',
  templateUrl: './ymca-event-card.component.html',
  styleUrls: ['./ymca-event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class YmcaEventCardComponent implements OnInit {

  @Input() id: string;
  @Input() description: string;
  @Input() createdDate: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() startDateTime: string;
  @Input() endDateTime: string;
  @Input() location: string;
  @Input() memberOnly: string;
  @Input() memberPrice: string;
  @Input() startingAge: string;
  @Input() startingAgeType: string;
  @Input() endingAge: string;
  @Input() endingAgeType: string;
  @Input() highGrade: string;
  @Input() lowGrade: string;
  @Input() nonMemberPrice: string;
  @Input() gender: string;
  @Input() remainingSlots: string;
  @Input() monday: string;
  @Input() season: string;
  @Input() zipcode: string;
  @Input() distanceToEvent: string;
  @Input() parentProduct: string;
  @Input() numberOfClassesPerWeek: string;


  @Output() addItemToCart = new EventEmitter();

  public state = {
    visible: true,
    addToCartEnabled: true,
  };

  constructor(private el: ElementRef, private cd: ChangeDetectorRef, private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    console.log(this.id);
    this.cartService.addCartItem(this.id);
  }

  public setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

}
