import { Component, OnInit, Input } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { CardIconService } from "src/app/services/card-icon.service";

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

  constructor(private cardIconService: CardIconService) {
    cardIconService.loadEventCardIcons();
  }

  ngOnInit() {}

  loadEventCardIcons() {}
}
