import {
  NgModule,
  Injector,
  CUSTOM_ELEMENTS_SCHEMA,
  Injectable
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoInfoToolbarComponent } from './core/components/repo-info-toolbar/repo-info-toolbar.component'
// Other
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import * as Sentry from '@sentry/browser';
import { ErrorHandler } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AirBnbLayoutComponent } from './core/components/air-bnb-layout/air-bnb-layout.component';
import { OriginalYmcaLayoutComponent } from './core/components/original-ymca-layout/original-ymca-layout.component';
import { AppRoutingModule } from './app-routing.module';
// Shared Modules
import { AngularElementsModule } from '@shared/modules/angular-elements/angular-elements.module';
import { NgMaterialModule } from '@shared/modules/ng-material/ng-material.module';
import { createCustomElement } from '@angular/elements';

Sentry.init({
  dsn: 'https://f704f4b6e26b48abbe96280b3ad1f813@sentry.io/1484901'
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
    AirBnbLayoutComponent,
    OriginalYmcaLayoutComponent,
    RepoInfoToolbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AppRoutingModule,
    NgMaterialModule,
    AngularElementsModule
  ],
  entryComponents: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [

  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // const ymcaEventCard = createCustomElement(YmcaEventCardComponent, {
    //   injector: this.injector
    // });
    // customElements.define('ymca-event-card', ymcaEventCard);
  }
}
