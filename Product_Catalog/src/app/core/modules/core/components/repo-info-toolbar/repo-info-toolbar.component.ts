import { Component, OnInit } from '@angular/core';
import { IconsService } from '@shared/services/icon/icons.service';

@Component({
  selector: 'app-repo-info-toolbar',
  templateUrl: './repo-info-toolbar.component.html',
  styleUrls: ['./repo-info-toolbar.component.scss']
})
export class RepoInfoToolbarComponent implements OnInit {

  constructor(private iconService: IconsService) { }

  ngOnInit() {
    this.loadIcons();
  }

  private loadIcons() {
    this.iconService.loadCompDocIcon();
    this.iconService.loadJestIcon();
    this.iconService.loadStorybookIcon();
    this.iconService.loadGitIcon();
    this.iconService.loadCypressIcon();
    this.iconService.loadAzurePipelineIcon();
    this.iconService.loadStorybookIcon();
    this.iconService.loadAPIIcon();
    this.iconService.loadLogoSmallIcon();
  }

}
