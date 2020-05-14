import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { NgMaterialModule } from '../ng-material/ng-material/ng-material.module';
import { TppConfirmationComponent, ConfirmationModalComponent } from './components/tpp-confirmation/tpp-confirmation.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ConfirmationBottomSheetComponent } from './components/confirmation-bottom-sheet/confirmation-bottom-sheet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [ConfirmationModalComponent, TppConfirmationComponent, ConfirmationBottomSheetComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
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
