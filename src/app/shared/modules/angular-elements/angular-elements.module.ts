// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
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
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgMaterialModule
  ],
  exports: [
    YmcaEventsComponent,
    AlertMessageComponent,
    BrowserWarningComponent,
    SnackBarComponent,
    YmcaLoadingGraphicComponent,
    SearchResultsMetaDataComponent,
    ShoppingCartButtonComponent,
    ShoppingCartComponent
  ],
  entryComponents: [
    YmcaEventsComponent,
    AlertMessageComponent,
    BrowserWarningComponent,
    SnackBarComponent,
    YmcaLoadingGraphicComponent,
    SearchResultsMetaDataComponent,
    ShoppingCartButtonComponent,
    ShoppingCartComponent
  ],
  providers:[
    ShoppingCartService
  ]
})
export class AngularElementsModule { }
