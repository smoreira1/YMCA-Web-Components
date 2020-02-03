import {
  NgModule,
  Injector,
  CUSTOM_ELEMENTS_SCHEMA,
  Injectable
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// YMCA Components
import { ShoppingCartButtonComponent } from "./components/angular-elements/shopping-cart-button/shopping-cart-button.component";
import { ShoppingCartComponent } from "./components/angular-elements/shopping-cart/shopping-cart.component";
import { ToolbarComponent } from "./components/angular-elements/toolbar/toolbar.component";
import { BrowserWarningComponent } from "./components/angular-elements/browser-warning/browser-warning.component";
import { AlertMessageComponent } from "./components/angular-elements/alert-message/alert-message.component";
import { SnackBarComponent } from "./components/angular-elements/snack-bar/snack-bar.component";
import { YmcaEventsComponent } from "./components/angular-elements/ymca-events/ymca-events.component";
import { YmcaEventCardComponent } from "./components/angular-elements/ymca-event-cards/ymca-event-card/ymca-event-card.component";
import { FiltersSideNavComponent } from "./components/angular-elements/filters-side-nav/filters-side-nav.component";
import { CampCardComponent } from "./components/angular-elements/ymca-event-cards/camp-card/camp-card.component";
import { SportCardComponent } from "./components/angular-elements/ymca-event-cards/sport-card/sport-card.component";
import { AquaticCardComponent } from "./components/angular-elements/ymca-event-cards/aquatic-card/aquatic-card.component";
import { FamilyLifeCardComponent } from "./components/angular-elements/ymca-event-cards/family-life-card/family-life-card.component";
import { SchoolCardComponent } from "./components/angular-elements/ymca-event-cards/school-card/school-card.component";
import { ViewStyleBarComponent } from "./components/angular-elements/view-style-bar/view-style-bar.component";
import { YmcaLoadingGraphicComponent } from "./components/angular-elements/ymca-loading-graphic/ymca-loading-graphic.component";

// Material Design Modules
// Note: We could export these into their own module.
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material/dialog";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from '@angular/material/menu';

// YMCA Services
import { ShoppingCartService } from "./components/angular-elements/shopping-cart/shopping-cart.service";

// Other
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import * as Sentry from "@sentry/browser";
import { ErrorHandler } from "@angular/core";
import {
  NgMatYmcaEventCardComponent,
  FullDescriptionDialog
} from "./components/angular-elements/ymca-event-cards/material/ng-mat-ymca-event-card/ng-mat-ymca-event-card.component";
import { AgmCoreModule } from "@agm/core";
import { RepoInfoToolbarComponent } from './components/repo-info-toolbar/repo-info-toolbar.component';
import { ActionFiltersComponent } from './components/angular-elements/action-filters/action-filters.component';
import { AirBnbLayoutComponent } from './components/air-bnb-layout/air-bnb-layout.component';
import { OriginalYmcaLayoutComponent } from './components/original-ymca-layout/original-ymca-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { NgMatYmcaEventAbnbComponent } from './components/angular-elements/ymca-event-cards/material/ng-mat-ymca-event-abnb/ng-mat-ymca-event-abnb.component';
import { SearchResultsMetaDataComponent } from './components/angular-elements/search-results-meta-data/search-results-meta-data.component';

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
    ViewStyleBarComponent,
    YmcaLoadingGraphicComponent,
    NgMatYmcaEventCardComponent,
    FullDescriptionDialog,
    RepoInfoToolbarComponent,
    ActionFiltersComponent,
    AirBnbLayoutComponent,
    OriginalYmcaLayoutComponent,
    NgMatYmcaEventAbnbComponent,
    SearchResultsMetaDataComponent
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
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    InfiniteScrollModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    }),
    MatMenuModule,
    AppRoutingModule
  ],
  entryComponents: [
    YmcaEventCardComponent,
    ToolbarComponent,
    SnackBarComponent,
    FullDescriptionDialog
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ShoppingCartComponent,
    YmcaEventCardComponent,
    ToolbarComponent,
    SnackBarComponent
  ],
  providers: [
    ShoppingCartService,
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const ymcaEventCard = createCustomElement(YmcaEventCardComponent, {
      injector: this.injector
    });
    customElements.define("ymca-event-card", ymcaEventCard);
  }
}
