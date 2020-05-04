import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal, confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  providers: [
    { provide: MatDialogRef, useValue: { hasBackdrop: true } },
  ]
})
export class ConfirmationModalComponent implements OnInit {
  public membershipNumber: string;
  public memberConfirmed = false;
  public errorMessage: string;
  public url: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
  ) {
  }

  ngOnInit(): void {
    this.url = window.location.href;
  }

  public submit() {
    if(this.membershipNumber === '1111111111111111'){
      this.memberConfirmed = true;
      localStorage.setItem('memberConfirmationDate' , new Date().toString());
      this.dialogRef.close();
    }
    else{
      console.log('error');
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
}
