import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartFacade, ShoppingCartState } from '@core/facades/shopping-cart/shopping-cart.facade';
import { Observable } from 'rxjs';
import { IconsService } from '@shared/services/icon/icons.service';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartButtonComponent implements OnInit {

  // Note: this is of type string so we may easily interpolate empty string in the scenario of a zero item cart.
  vm$: Observable<ShoppingCartState> = this.shoppingCartFacade.vm$;
  constructor(
    public shoppingCartFacade: ShoppingCartFacade,
    private iconService: IconsService
  ) { }

  ngOnInit() {
    this.loadIcons();
    // const {criteria} = this.shoppingCartFacade.getStateSnapshot();
  }

  private loadIcons() {
    this.iconService.loadShoppingCartIcon();
  }

  toggleShoppingCart() {
    console.log('Toggle Shopping Cart');
  }

}
