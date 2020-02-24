// Angular Core
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
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
import { FiltersSideNavComponent } from '@ymcaComponents/filters-side-nav/filters-side-nav.component';
import { ActionFiltersComponent } from '@ymcaComponents/action-filters/action-filters.component';
import { YmcaEventCardComponent } from '@ymcaComponents/ymca-event-cards/ymca-event-card/ymca-event-card.component';
import { NgMatYmcaEventCardComponent } from '@ymcaComponents/ymca-event-cards/material/ng-mat-ymca-event-card/ng-mat-ymca-event-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { YMCAEventFacade } from '@core/facades/ymca-event.facade';


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
    FiltersSideNavComponent,
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
    FiltersSideNavComponent,
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
    FiltersSideNavComponent,
    ActionFiltersComponent,
    YmcaEventCardComponent,
    NgMatYmcaEventCardComponent,
  ],
  providers: [
    ShoppingCartService,
    YMCAEventFacade
  ]
})
export class AngularElementsModule {

  constructor(private injector: Injector){

  }

  ngDoBootstrap() {
        const eventsElement = createCustomElement(YmcaEventsComponent, {injector : this.injector});
        customElements.define('ymca-events',eventsElement);

        window.ymcaComponent = window.ymcaComponent || {};
        window.ymcaComponent.init = this.productCatalogInit.bind(this);
  }

  productCatalogInit():void{

  }

}
