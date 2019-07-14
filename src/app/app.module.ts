import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserWarningComponent } from './components/browser-warning/browser-warning.component';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { YmcaEventsComponent } from './components/ymca-events/ymca-events.component';
import { YmcaEventCardComponent } from './components/ymca-event-card/ymca-event-card.component';
import { MobileFilterModalComponent } from './components/mobile-filter-modal/mobile-filter-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Design Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ToolbarComponent,
    BrowserWarningComponent,
    AlertMessageComponent,
    SnackBarComponent,
    YmcaEventsComponent,
    YmcaEventCardComponent,
    MobileFilterModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule
  ],
  entryComponents: [
    YmcaEventCardComponent,
    ToolbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [ShoppingCartComponent, YmcaEventCardComponent, ToolbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const ymcaEventCard = createCustomElement(YmcaEventCardComponent, { injector: this.injector });
    customElements.define('app-ymca-event-card', ymcaEventCard);
  }

}
