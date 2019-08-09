import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// YMCA Components 
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserWarningComponent } from './components/browser-warning/browser-warning.component';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { YmcaEventsComponent } from './components/ymca-events/ymca-events.component';
import { YmcaEventCardComponent } from './components/ymca-event-card/ymca-event-card.component';

// Material Design Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShoppingCartService } from './components/shopping-cart/shopping-cart.service';

// Other
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FiltersSideNavComponent } from './components/filters-side-nav/filters-side-nav.component';

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
    ShoppingCartButtonComponent,
    FiltersSideNavComponent,
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
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSnackBarModule,
    InfiniteScrollModule
  ],
  entryComponents: [
    YmcaEventCardComponent,
    ToolbarComponent,
    SnackBarComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ShoppingCartComponent,
    YmcaEventCardComponent,
    ToolbarComponent,
    SnackBarComponent,
  ],
  providers: [
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const ymcaEventCard = createCustomElement(YmcaEventCardComponent, { injector: this.injector });
    customElements.define('app-ymca-event-card', ymcaEventCard);
  }

}
