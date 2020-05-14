// import { Component, OnInit } from '@angular/core';
// import {
//   MatDialog,
//   MatDialogRef,
//   MAT_DIALOG_DATA,
// } from '@angular/material/dialog';
// import {FormControl, Validators} from '@angular/forms';
// import { IconsService } from 'src/services/icons.service';


// @Component({
//   selector: 'app-confirmation-modal, confirmation-modal',
//   templateUrl: './confirmation-modal.component.html',
//   styleUrls: ['./confirmation-modal.component.scss'],
//   providers: [
//     { provide: MatDialogRef, useValue: { hasBackdrop: true } },
//   ]
// })
// export class ConfirmationModalComponent implements OnInit {
//   public membershipNumber: string;
//   public memberConfirmed = false;
//   public errorMessage: string;
//   public url: string;

//   memberIdFormControl = new FormControl('', [
//     Validators.required,
//     Validators.minLength(16),
//   ]);

//   constructor(
//     public dialogRef: MatDialogRef<ConfirmationModalComponent>,
//     private iconsService: IconsService
//   ) {
//   }

//   ngOnInit(): void {
//     this.url = window.location.href;
//     this.loadIcons();
//   }

//   private loadIcons(){
//     this.iconsService.loadSilverSneakersIcon();
//     this.iconsService.loadMemberIdIcon();
//   }

//   public submit(): void {
//     console.log('submit');
//     if(this.memberIdFormControl.value=== '1111111111111111'){
//       this.memberConfirmed = true;
//       localStorage.setItem('memberConfirmationDate' , new Date().toString());
//       console.log(this.dialogRef);
//       this.dialogRef.close();
//     }
//     else{
//       console.log('Error');
//       this.errorMessage = 'This member id was not recognized.';
//     }
//   }

//   public cancel() {
//     console.log('Cancel');
//     this.dialogRef.close();
//   }

//   private readLocalStorage(): boolean {
//     if (localStorage.getItem('memberConfirmation')){
//       const currentDateTime = new Date();
//       const lastMemberConfirmationDateTime = new Date (localStorage.getItem('memberConfirmation'));
//     }
//     return false;
//   }

//   onNoClick(): void {
//     console.log(this.dialogRef);
//     this.dialogRef.close();
//   }

// }
