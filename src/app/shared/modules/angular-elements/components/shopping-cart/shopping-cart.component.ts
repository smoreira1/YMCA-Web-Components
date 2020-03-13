import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { environment } from "@environments/environment";
import {
  ShoppingCartFacade,
  ShoppingCartState
} from "@core/facades/shopping-cart/shopping-cart.facade";
import { Observable } from "rxjs";
import { IconsService } from "@shared/services/icon/icons.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {
  public communityURL = environment.communityURL;
  vm$: Observable<ShoppingCartState> = this.shoppingCartFacade.vm$;
  constructor(private iconService: IconsService, public shoppingCartFacade: ShoppingCartFacade) {}

  ngOnInit() {
    this.loadIcons();
  }

  private loadIcons(){
    this.iconService.loadCloseIcon();
  }
}
