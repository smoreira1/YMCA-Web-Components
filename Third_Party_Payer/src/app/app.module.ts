import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from 'src/shared/modules/ng-material/ng-material/ng-material.module';
import { AeThirdPartyPayerModule } from 'src/shared/modules/ae-third-party-payer/ae-third-party-payer.module';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogRef,
} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TppConfirmationComponent, ConfirmationModalComponent } from 'src/shared/modules/ae-third-party-payer/components/tpp-confirmation/tpp-confirmation.component';
import { ConfirmationBottomSheetComponent } from 'src/shared/modules/ae-third-party-payer/components/confirmation-bottom-sheet/confirmation-bottom-sheet.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    NgMaterialModule,
    AeThirdPartyPayerModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  entryComponents: [TppConfirmationComponent, ConfirmationBottomSheetComponent, ConfirmationModalComponent, MatButtonModule ],
  bootstrap: [AppComponent],
})
export class AppModule {}
