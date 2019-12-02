import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CardIconService {

  constructor(    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {


    }



  loadEventCardIcons() {
    this.iconRegistry.addSvgIcon(
      "time",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/times.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "gender",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/gender.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "family-center",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/family-center.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "days",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/days.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "maximize",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/maximize.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "sports",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/sports.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "location",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/location.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "date",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/date.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "gender",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/gender-2.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "price",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/price.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "right-arrow",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/right-arrow.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "right-arrow",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/right-arrow.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "grade",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/grade.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "age",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/event-card/age.svg"
      )
    );
  }
}
