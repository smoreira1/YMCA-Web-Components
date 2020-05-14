import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { IconsService } from 'src/services/icons.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-tpp-confirmation, tpp-confirmation',
  templateUrl: 'tpp-confirmation.component.html',
  styleUrls: ['tpp-confirmation.component.scss'],
})
export class TppConfirmationComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    if (!this.accessDurationValid()) {
      console.log(this.accessDurationValid());
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '600px',
      disableClose: true,
      backdropClass: 'backdropBackground',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Confirmation Dialog was closed.');
    });
  }

  private accessDurationValid(): boolean {
    if (localStorage.getItem('memberConfirmationDate')) {
      const lastMemberConfirmationDateTime = new Date(
        localStorage.getItem('memberConfirmationDate')
      );
      return this.isToday(lastMemberConfirmationDateTime);
    }
    return false;
  }

  private isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };
}

@Component({
  selector: 'confirmation-modal',
  templateUrl: 'confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  public membershipNumber: string;
  public memberConfirmed = false;
  public errorMessage: string;
  public url: string;

  memberIdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
  ]);

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    public iconsService: IconsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.url = window.location.href;
    this.loadIcons();
  }

  private loadIcons() {
    this.iconsService.loadSilverSneakersIcon();
    this.iconsService.loadMemberIdIcon();
  }

  public submit(): void {
    console.log('submit');
    if (this.memberIdFormControl.value === '1111111111111111') {
      this.memberConfirmed = true;
      localStorage.setItem('memberConfirmationDate', new Date().toString());
      console.log(this.dialogRef);
      this.dialogRef.close();
    } else {
      console.log('Error');
      this.errorMessage = 'This member id was not recognized.';
    }
  }
}
