import { Component, OnInit } from '@angular/core';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tpp-confirmation,tpp-confirmation',
  templateUrl: './tpp-confirmation.component.html',
  styleUrls: ['./tpp-confirmation.component.scss']
})
export class TppConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.openDialog();
  }


  public openDialog() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '600px',
      height: '50vh',
      disableClose: true,
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Confirmation Dialog was closed.');
    });
  }


}
