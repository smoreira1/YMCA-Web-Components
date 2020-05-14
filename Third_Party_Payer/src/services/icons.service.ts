//*NOTE: This Service is to centralize all icons used throughout the application; there could be some negative impact performance
//*loading this entire service per component, etc.

//*NOTE: Please follow the following naming convention guidelines: load{svgIconName}Icon
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  public loadSilverSneakersIcon() {
    this.iconRegistry.addSvgIcon(
      'SilverSneakers',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/silver-sneakers.svg'
      )
    );
  }

  public loadMemberIdIcon() {
    this.iconRegistry.addSvgIcon(
      'MemberId',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/member-id.svg'
      )
    );
  }
}
