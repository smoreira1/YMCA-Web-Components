import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconsService {


  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
  }

  loadGeoLocationEnabledIcon(){
    this.iconRegistry.addSvgIcon(
      'GeoLocationEnabled',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/toolbar/geo-location-enabled.svg'
      )
    );
  }

  loadDistanceIcon(){
    this.iconRegistry.addSvgIcon(
      'distance',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/toolbar/distance-2.svg'
      )
    );
  }

  loadTimesIcon(){
    this.iconRegistry.addSvgIcon(
      'time',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/times.svg'
      )
    );
  }

  loadGenderIcon(){
    this.iconRegistry.addSvgIcon(
      'gender',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/gender.svg'
      )
    );
  }

  loadFamilyCenterIcon(){
    this.iconRegistry.addSvgIcon(
      'family-center',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/family-center.svg'
      )
    );
  }

  loadDaysIcon(){
    this.iconRegistry.addSvgIcon(
      'days',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/days.svg'
      )
    );
  }

  loadMaximizeIcon(){
    this.iconRegistry.addSvgIcon(
      'maximize',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/maximize.svg'
      )
    );
  }

  loadSportsIcon(){
    this.iconRegistry.addSvgIcon(
      'sports',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/sports.svg'
      )
    );
  }

  loadLocationIcon(){
    this.iconRegistry.addSvgIcon(
      'location',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/location.svg'
      )
    );
  }

  loadDateIcon(){
    this.iconRegistry.addSvgIcon(
      'date',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/date.svg'
      )
    );
  }

  loadGender2Icon(){
    this.iconRegistry.addSvgIcon(
      'gender',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/gender-2.svg'
      )
    );
  }

  loadPriceIcon(){
    this.iconRegistry.addSvgIcon(
      'price',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/price.svg'
      )
    );
  }

  loadRightArrowIcon(){
    this.iconRegistry.addSvgIcon(
      'right-arrow',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/right-arrow.svg'
      )
    );
  }

  loadGradeIcon(){
    this.iconRegistry.addSvgIcon(
      'grade',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/grade.svg'
      )
    );
  }

  loadAgeIcon(){
    this.iconRegistry.addSvgIcon(
      'age',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/event-card/age.svg'
      )
    );
  }


  loadCompDocIcon(){
    this.iconRegistry.addSvgIcon(
      'CompDoc',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/compdoc.svg'
      )
    );
  }

  loadStorybookIcon(){
    this.iconRegistry.addSvgIcon(
      'Storybook',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/storybook.svg'
      )
    );
  }

  loadJestIcon(){
    this.iconRegistry.addSvgIcon(
      'Jest',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/jest.svg'
      )
    );
  }

  loadAzurePipelineIcon(){
    this.iconRegistry.addSvgIcon(
      'AzurePipeline',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/azurepipeline.svg'
      )
    );
  }

  loadGitIcon(){
    this.iconRegistry.addSvgIcon(
      'Git',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/git.svg'
      )
    );
  }

  loadCypressIcon(){
    this.iconRegistry.addSvgIcon(
      'Cypress',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/cypress.svg'
      )
    );
  }


  loadAPIIcon(){
    this.iconRegistry.addSvgIcon(
      'API',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/api.svg'
      )
    );
  }

  loadLogoSmallIcon(){
    this.iconRegistry.addSvgIcon(
      'LogoSmall',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/graphics/ymca-logo-sm.png'
      )
    );
  }


}
