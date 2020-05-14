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

  public loadRawMemberIdIcon() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="id-badge" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-id-badge fa-w-12 fa-3x"><path fill="currentColor" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z" class=""></path></svg>`
    );
  }

  public loadRawSilverSneakersIcon() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shoe-prints" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-shoe-prints fa-w-20 fa-3x"><path fill="currentColor" d="M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64zM0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64zm337.46-128c-34.91 0-76.16 13.12-104.73 32-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05 32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96zM491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32 28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81z" class=""></path></svg>`
    );
  }
}
