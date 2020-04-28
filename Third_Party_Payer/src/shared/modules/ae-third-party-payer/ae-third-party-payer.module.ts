import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { NgMaterialModule } from '../ng-material/ng-material/ng-material.module';
import { TppConfirmationComponent } from './components/tpp-confirmation/tpp-confirmation.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



@NgModule({
  declarations: [ConfirmationModalComponent, TppConfirmationComponent],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports : [
    ConfirmationModalComponent,
    TppConfirmationComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
})
export class AeThirdPartyPayerModule { }
