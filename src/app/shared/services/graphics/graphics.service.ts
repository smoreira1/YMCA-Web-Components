import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class GraphicsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}


  loadEmptyCartGraphic() {
    this.iconRegistry.addSvgIcon(
      "EmptyCart",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/graphics/empty-cart.svg"
      )
    );
  }

  loadNoResultsGraphic() {
    this.iconRegistry.addSvgIcon(
      "NoResults",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/graphics/no-results.svg"
      )
    );
  }


}
