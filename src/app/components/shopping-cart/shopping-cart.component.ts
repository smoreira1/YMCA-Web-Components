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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShoppingCartComponent implements OnInit {

  @Input() cartNumber: string;
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
   this.cartService.getCartItems();
  }

  public deleteCartItem(cartItemId: string): void{
    this.cartService.deleteCartItem(cartItemId);
  }

}
