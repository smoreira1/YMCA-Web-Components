import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { environment } from "@environments/environment";
import {
  ShoppingCartFacade,
  ShoppingCartState
} from "@core/facades/shopping-cart/shopping-cart.facade";
import { Observable } from "rxjs";
import { IconsService } from "@shared/services/icon/icons.service";
import { GraphicsService } from "@shared/services/graphics/graphics.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {
  public communityURL = environment.communityURL;
  vm$: Observable<ShoppingCartState> = this.shoppingCartFacade.vm$;
  constructor(
    private iconService: IconsService,
    public shoppingCartFacade: ShoppingCartFacade,
    public graphicsService: GraphicsService
  ) {}

  ngOnInit() {
    this.loadIcons();
    this.loadGraphics();
  }

  private loadIcons() {
    this.iconService.loadCloseIcon();
    this.iconService.loadSwimIcon();
    this.iconService.loadCampsIcon()
  }

  private loadGraphics() {
    this.graphicsService.loadEmptyCartGraphic();
  }
}
