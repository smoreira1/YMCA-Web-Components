import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  loadGeoLocationEnabledIcon() {
    this.iconRegistry.addSvgIcon(
      "GeoLocationEnabled",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/geo-location-enabled.svg"
      )
    );
  }

  loadDistanceIcon() {
    this.iconRegistry.addSvgIcon(
      "Distance",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/distance.svg"
      )
    );
  }

  loadTimesIcon() {
    this.iconRegistry.addSvgIcon(
      "Time",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/times.svg"
      )
    );
  }

  loadGenderIcon() {
    this.iconRegistry.addSvgIcon(
      "Gender",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/gender.svg"
      )
    );
  }

  loadFamilyCenterIcon() {
    this.iconRegistry.addSvgIcon(
      "FamilyCenter",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/family-center.svg"
      )
    );
  }

  loadDaysIcon() {
    this.iconRegistry.addSvgIcon(
      "Days",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/days.svg"
      )
    );
  }

  loadMaximizeIcon() {
    this.iconRegistry.addSvgIcon(
      "Maximize",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/maximize.svg"
      )
    );
  }

  loadLocationIcon() {
    this.iconRegistry.addSvgIcon(
      "Location",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/location.svg"
      )
    );
  }

  loadDateIcon() {
    this.iconRegistry.addSvgIcon(
      "Date",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/date.svg"
      )
    );
  }

  loadGender2Icon() {
    this.iconRegistry.addSvgIcon(
      "Gender",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/gender-2.svg"
      )
    );
  }

  loadPriceIcon() {
    this.iconRegistry.addSvgIcon(
      "Price",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/price.svg"
      )
    );
  }

  loadRightArrowIcon() {
    this.iconRegistry.addSvgIcon(
      "RightArrow",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/right-arrow.svg"
      )
    );
  }

  loadGradeIcon() {
    this.iconRegistry.addSvgIcon(
      "Grade",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/grade.svg"
      )
    );
  }

  loadAgeIcon() {
    this.iconRegistry.addSvgIcon(
      "Age",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/age.svg"
      )
    );
  }

  loadCompDocIcon() {
    this.iconRegistry.addSvgIcon(
      "CompDoc",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/compdoc.svg")
    );
  }

  loadStorybookIcon() {
    this.iconRegistry.addSvgIcon(
      "Storybook",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/storybook.svg"
      )
    );
  }

  loadJestIcon() {
    this.iconRegistry.addSvgIcon(
      "Jest",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/jest.svg")
    );
  }

  loadAzurePipelineIcon() {
    this.iconRegistry.addSvgIcon(
      "AzurePipeline",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/azurepipeline.svg"
      )
    );
  }

  loadGitIcon() {
    this.iconRegistry.addSvgIcon(
      "Git",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/git.svg")
    );
  }

  loadCypressIcon() {
    this.iconRegistry.addSvgIcon(
      "Cypress",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/cypress.svg")
    );
  }

  loadAPIIcon() {
    this.iconRegistry.addSvgIcon(
      "API",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/api.svg")
    );
  }

  loadLogoSmallIcon() {
    this.iconRegistry.addSvgIcon(
      "LogoSmall",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/graphics/ymca-logo-sm.png"
      )
    );
  }

  loadShoppingCartIcon() {
    this.iconRegistry.addSvgIcon(
      "ShoppingCart",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/shopping-cart.svg"
      )
    );
  }

  loadFilterIcon() {
    this.iconRegistry.addSvgIcon(
      "Filter",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/filter.svg"
      )
    );
  }

  loadAddToCartIcon() {
    this.iconRegistry.addSvgIcon(
      "AddToCart",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/add-to-cart.svg"
      )
    );
  }

  loadSportsIcon() {
    this.iconRegistry.addSvgIcon(
      "Sports",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/basketball.svg"
      )
    );
  }

  loadSwimIcon() {
    this.iconRegistry.addSvgIcon(
      "Swim",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/sports.svg"
      )
    );
  }

  loadCampsIcon() {
    this.iconRegistry.addSvgIcon(
      "Camps",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/sports.svg"
      )
    );
  }

  loadGenericProductIcon() {
    this.iconRegistry.addSvgIcon(
      "GenericProduct",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/sports.svg"
      )
    );
  }

  loadCloseIcon() {
    this.iconRegistry.addSvgIcon(
      "GenericProduct",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/sports.svg"
      )
    );
  }

}
