import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from 'src/shared/modules/ng-material/ng-material/ng-material.module';
import { AeThirdPartyPayerModule } from 'src/shared/modules/ae-third-party-payer/ae-third-party-payer.module';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationModalComponent } from 'src/shared/modules/ae-third-party-payer/components/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NgMaterialModule,
    AeThirdPartyPayerModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  entryComponents: [
    ConfirmationModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
