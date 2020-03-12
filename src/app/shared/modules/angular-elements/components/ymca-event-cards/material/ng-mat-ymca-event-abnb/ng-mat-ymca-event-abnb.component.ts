import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../ng-mat-ymca-event-card/ng-mat-ymca-event-card.component';
import { IconsService } from '@shared/services/icon/icons.service';
import { ShoppingCartFacade, ShoppingCartState } from '@core/facades/shopping-cart/shopping-cart.facade';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ng-mat-ymca-event-abnb',
  templateUrl: './ng-mat-ymca-event-abnb.component.html',
  styleUrls: ['./ng-mat-ymca-event-abnb.component.scss']
})
export class NgMatYmcaEventAbnbComponent implements OnInit {

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
  @Input() saturday: string;
  @Input() sunday: string;

  @Input() earlyRegistration: string;
  @Input() earlyRegistrationNonMemberPrice: string;
  @Input() earlyRegistrationMemberPrice: string;

  vm$: Observable<ShoppingCartState> = this.shoppingCartFacade.vm$;
  constructor(
    public dialog: MatDialog,
    public shoppingCartFacade: ShoppingCartFacade
  ) {

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

}
