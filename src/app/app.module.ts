import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
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
import { YmcaEventCardComponent } from './components/ymca-event-cards/ymca-event-card/ymca-event-card.component';
import { FiltersSideNavComponent } from './components/filters-side-nav/filters-side-nav.component';
import { CampCardComponent } from './components/ymca-event-cards/camp-card/camp-card.component';
import { SportCardComponent } from './components/ymca-event-cards/sport-card/sport-card.component';
import { AquaticCardComponent } from './components/ymca-event-cards/aquatic-card/aquatic-card.component';
import { FamilyLifeCardComponent } from './components/ymca-event-cards/family-life-card/family-life-card.component';
import { SchoolCardComponent } from './components/ymca-event-cards/school-card/school-card.component';
// Material Design Modules
// Note: We could export these into their own module.
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
// YMCA Components Services
import { ShoppingCartService } from './components/shopping-cart/shopping-cart.service';
// Other
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import * as Sentry from '@sentry/browser';
import { ErrorHandler } from '@angular/core';

Sentry.init({
  dsn: "https://f704f4b6e26b48abbe96280b3ad1f813@sentry.io/1484901"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

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
    CampCardComponent,
    SportCardComponent,
    AquaticCardComponent,
    FamilyLifeCardComponent,
    SchoolCardComponent,
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
    MatProgressSpinnerModule,
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
    ShoppingCartService,
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const ymcaEventCard = createCustomElement(YmcaEventCardComponent, { injector: this.injector });
    customElements.define('ymca-event-card', ymcaEventCard);
  }

}
