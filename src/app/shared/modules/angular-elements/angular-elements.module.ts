// Angular Core
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { APP_INITIALIZER } from '@angular/core';

// OutSide Modules
import { NgMaterialModule } from '@shared/modules/ng-material/ng-material.module';
// Core YMCA Web Components.
import { YmcaEventsComponent } from '@ymcaComponents/ymca-events/ymca-events.component';
import { AlertMessageComponent } from '@ymcaComponents/alert-message/alert-message.component';
import { BrowserWarningComponent } from '@ymcaComponents/browser-warning/browser-warning.component';
import { SnackBarComponent } from '@ymcaComponents/snack-bar/snack-bar.component';
import { YmcaLoadingGraphicComponent } from '@ymcaComponents/ymca-loading-graphic/ymca-loading-graphic.component';
import { SearchResultsMetaDataComponent } from '@ymcaComponents/search-results-meta-data/search-results-meta-data.component';
import { ShoppingCartButtonComponent } from '@ymcaComponents/shopping-cart-button/shopping-cart-button.component';
import { ShoppingCartComponent } from '@ymcaComponents/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '@shared/services/shopping-cart.service';
import { NgElement, WithProperties } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YmcaCatalogInitComponent } from '@ymcaComponents/ymca-catalog-init/ymca-catalog-init.component';
import { NgMatYmcaEventAbnbComponent } from '@ymcaComponents/ymca-event-cards/material/ng-mat-ymca-event-abnb/ng-mat-ymca-event-abnb.component';
import { ToolbarComponent } from '@ymcaComponents/toolbar/toolbar.component';
import { ActionFiltersComponent } from '@ymcaComponents/action-filters/action-filters.component';
import { YmcaEventCardComponent } from '@ymcaComponents/ymca-event-cards/ymca-event-card/ymca-event-card.component';
import { NgMatYmcaEventCardComponent } from '@ymcaComponents/ymca-event-cards/material/ng-mat-ymca-event-card/ng-mat-ymca-event-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { YMCAEventFacade } from '@core/facades/ymca-events/ymca-event.facade';
import { ProductsCatalogJupiterComponent } from './components/products-catalog-jupiter/products-catalog-jupiter.component';
import { ShoppingCartFacade } from '@core/facades/shopping-cart/shopping-cart.facade';


declare global {
  interface HTMLElementTagNameMap {
    'snack-bar': NgElement & WithProperties<{content: string}>;
    'ymca-events': NgElement & WithProperties<{foo: 'bar'}>;
  }
}

@NgModule({
  declarations: [
    YmcaEventsComponent,
    AlertMessageComponent,
    BrowserWarningComponent,
    SnackBarComponent,
    YmcaLoadingGraphicComponent,
    SearchResultsMetaDataComponent,
    ShoppingCartButtonComponent,
    ShoppingCartComponent,
    YmcaCatalogInitComponent,
    NgMatYmcaEventAbnbComponent,
    NgMatYmcaEventCardComponent,
    ToolbarComponent,
    // FiltersSideNavComponent,
    ProductsCatalogJupiterComponent,
    ActionFiltersComponent,
    YmcaEventCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    YmcaEventsComponent,
    AlertMessageComponent,
    BrowserWarningComponent,
    SnackBarComponent,
    YmcaLoadingGraphicComponent,
    SearchResultsMetaDataComponent,
    ShoppingCartButtonComponent,
    ShoppingCartComponent,
    ToolbarComponent,
    ProductsCatalogJupiterComponent,
    ActionFiltersComponent,
    YmcaEventCardComponent,
    NgMatYmcaEventCardComponent,
  ],
  entryComponents: [
    YmcaEventsComponent,
    AlertMessageComponent,
    BrowserWarningComponent,
    SnackBarComponent,
    YmcaLoadingGraphicComponent,
    SearchResultsMetaDataComponent,
    ShoppingCartButtonComponent,
    ShoppingCartComponent,
    ToolbarComponent,
    ProductsCatalogJupiterComponent,
    ActionFiltersComponent,
    YmcaEventCardComponent,
    NgMatYmcaEventCardComponent,
  ],
  providers: [
    ShoppingCartService,
    ShoppingCartFacade,
    YMCAEventFacade,
    {
      provide: APP_INITIALIZER,
      useFactory: (ds: ShoppingCartService) => function() { return ds.load(); },
      deps: [ShoppingCartService],
      multi: true
    }
  ],
  bootstrap: [YmcaCatalogInitComponent]
})
export class AngularElementsModule implements DoBootstrap{

  constructor(private injector: Injector){}

  ngDoBootstrap() {
    // console.log('Angular Elements Bootstrap');
    // const eventsElement = createCustomElement(YmcaEventsComponent, {injector : this.injector});
    // customElements.define('ymca-events',eventsElement);
    // window.ymcaComponent = window.ymcaComponent || {};
    // window.ymcaComponent.init = this.productCatalogInit.bind(this);
  }

  productCatalogInit():void{
    console.log('Cooper:');
    console.log('Woof Woof:');
  }

}
