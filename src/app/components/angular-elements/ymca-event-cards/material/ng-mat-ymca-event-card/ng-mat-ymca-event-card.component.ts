import { Component, OnInit, Input, Inject } from "@angular/core";
import {
  MatIconRegistry,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from "@angular/material";
import { CardIconService } from "src/app/services/card-icon.service";

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: "app-ng-mat-ymca-event-card",
  templateUrl: "./ng-mat-ymca-event-card.component.html",
  styleUrls: ["./ng-mat-ymca-event-card.component.scss"]
})
export class NgMatYmcaEventCardComponent implements OnInit {
  @Input() id: string;
  @Input() description: string;
  @Input() createdDate: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() startTime: string;
  @Input() endTime: string;
  @Input() locationName: string;
  @Input() memberOnly: string;
  @Input() memberPrice: string;
  @Input() startingAge: string;
  @Input() startingAgeType: string;
  @Input() endingAge: string;
  @Input() endingAgeType: string;
  @Input() highGrade: string;
  @Input() lowGrade: string;
  @Input() nonMemberPrice: string;
  @Input() gender: string;
  @Input() remainingSlots: string;
  @Input() season: string;
  @Input() zipcode: string;
  @Input() distanceToEvent: string;
  @Input() parentProduct: string;
  @Input() numberOfClassesPerWeek: string;
  @Input() lowAge: string;
  @Input() highAge: string;

  @Input() monday: string;
  @Input() tuesday: string;
  @Input() wednesday: string;
  @Input() thursday: string;
  @Input() friday: string;
  @Input() satruday: string;
  @Input() sunday: string;

  @Input() earlyRegistration: string;
  @Input() earlyRegistrationNonMemberPrice: string;
  @Input() earlyRegistrationMemberPrice: string;

  constructor(
    private cardIconService: CardIconService,
    public dialog: MatDialog
  ) {
    this.cardIconService.loadEventCardIcons();
  }

  ngOnInit() {
    this.startDate = this.convertDateToAmericanFormat(this.startDate);
    this.endDate = this.convertDateToAmericanFormat(this.endDate);
  }

  convertDateToAmericanFormat(dateString: string) {
    const date = new Date(dateString);
    return `${date.toLocaleDateString("EN", {
      month: "short"
    })}-${date.getDate()}-${date.getFullYear()}`;
  }

  openFullDescription(): void {
    const dialogRef = this.dialog.open(FullDescriptionDialog, {
      width: '250px',
      data: {name: this.parentProduct, animal: this.parentProduct}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: "full-description",
  templateUrl: "full-description.html"
})

export class FullDescriptionDialog {
  constructor(
    public dialogRef: MatDialogRef<FullDescriptionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
