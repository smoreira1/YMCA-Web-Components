import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {


  public cartItems = [
    {
      parentProduct: 'Parent Product',
      dateRange: 'Woot Date Range',
      description: 'ready description'
    },
    {
      parentProduct: 'Parent Product',
      dateRange: 'Woot Date Range',
      description: 'ready description'
    },
    {
      parentProduct: 'Parent Product',
      dateRange: 'Woot Date Range',
      description: 'ready description'
    },
  ];

  @Input() cartNumber: string;
  @Input() open = false;
  // @Output() rerendered: new EventEmitter();
  // Modify with stState
  public state = {
    visible: false,
    loaded: false
  };
  
  public communityURL = environment.communityURL;
  constructor(private el: ElementRef, private cd: ChangeDetectorRef, private cartService: CartService) {
    this.cartService.change.subscribe(isOpen => {
      this.state.visible = isOpen;
      //this.appsettings.toggle();
    });

   }

  ngOnInit() {
  }

  public setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

  public getCartItems(): void {
    if(localStorage.getItem('cartId')){
      this.cartService.getCartItems(localStorage.getItem('cartId'));
    }
  }

  public deleteCartItem(cartItemId: string): void{
    this.cartService.deleteCartItem(cartItemId);
  }

  public closeCart(){
    console.log('closeCart');
  }

}
