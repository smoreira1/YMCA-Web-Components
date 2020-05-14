import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
// import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl, Validators } from '@angular/forms';
import { IconsService } from 'src/services/icons.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-tpp-confirmation,tpp-confirmation',
  templateUrl: './tpp-confirmation.component.html',
  styleUrls: ['./tpp-confirmation.component.scss'],
  providers: [
    { provide: MatDialogRef, useValue: { hasBackdrop: true } },
  ],
  encapsulation: ViewEncapsulation.None
})
export class TppConfirmationComponent implements OnInit {

  animal: string;
  name: string;


  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log('Open Dialog');
    this.openDialog();
  }


  public openDialog() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '600px',
      disableClose: true,
      backdropClass: 'backdropBackground',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Confirmation Dialog was closed.');
    });
  }


}


@Component({
  selector: 'app-confirmation-modal, confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: MatDialogRef, useValue: { hasBackdrop: true } },
  ]
})
export class ConfirmationModalComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    this.url = window.location.href;
    this.loadIcons();
  }

  private loadIcons(){
    this.iconsService.loadSilverSneakersIcon();
    this.iconsService.loadMemberIdIcon();
  }

  public submit(): void {
    console.log('submit');
    if(this.memberIdFormControl.value=== '1111111111111111'){
      this.memberConfirmed = true;
      localStorage.setItem('memberConfirmationDate' , new Date().toString());
      console.log(this.dialogRef);
      this.dialogRef.close();
    }
    else{
      console.log('Error');
      this.errorMessage = 'This member id was not recognized.';
    }
  }

  public cancel() {
    console.log('Cancel');
    this.dialogRef.close();
  }

  private readLocalStorage(): boolean {
    if (localStorage.getItem('memberConfirmation')){
      const currentDateTime = new Date();
      const lastMemberConfirmationDateTime = new Date (localStorage.getItem('memberConfirmation'));
    }
    return false;
  }

  onNoClick(): void {
    console.log(this.dialogRef);
    this.dialogRef.close();
  }

}

