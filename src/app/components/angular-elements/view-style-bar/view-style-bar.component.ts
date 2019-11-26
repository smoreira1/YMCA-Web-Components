import { Component, OnInit, Input } from "@angular/core";
import { ViewStyleService } from "src/app/services/view-style.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";

@Component({
  selector: "app-view-style-bar",
  templateUrl: "./view-style-bar.component.html",
  styleUrls: ["./view-style-bar.component.scss"]
})
export class ViewStyleBarComponent implements OnInit {
  @Input() cardStyleOption: string;

  constructor(
    private viewStyleService: ViewStyleService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {

    this.loadCardDensityIcons();
    this.loadCardStyleIcons();
  }

  ngOnInit() {}

  switchDensity(){

  }

  switchCardStyle(){

  }

  loadCardStyleIcons(){
    this.iconRegistry.addSvgIcon(
      "bootstrap",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/card-style-icons/ng-bootstrap.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "lightning",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/card-style-icons/ng-lightning.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "material",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/card-style-icons/ng-material.svg"
      )
    );

  }

  loadCardDensityIcons(){
    this.iconRegistry.addSvgIcon(
      "low-density",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/density-icons/low-density.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "mid-density",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/density-icons/mid-density.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "high-density",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/density-icons/high-density.svg"
      )
    );
  }

}
