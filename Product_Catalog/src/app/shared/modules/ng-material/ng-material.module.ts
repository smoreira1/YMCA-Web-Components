// Core Angular Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Anguarl Material Modules
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule } from "@angular/material/dialog";
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
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
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatListModule
  ],
  exports: [
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
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ]
})
export class NgMaterialModule {}
