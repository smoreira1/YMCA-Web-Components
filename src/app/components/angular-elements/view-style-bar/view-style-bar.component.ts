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

  ngOnInit() {}

  switchDensity(){

  }

  switchCardStyle(){

  }

}
