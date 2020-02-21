import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { detect } from 'detect-browser';

@Component({
  selector: 'app-browser-warning',
  templateUrl: './browser-warning.component.html',
  styleUrls: ['./browser-warning.component.scss']
})
export class BrowserWarningComponent implements OnInit {

  public MIN_BROWSER_VERSION = {
    FIREFOX: 52,
    SAFARI: 10,
    CHROME: 58,
    EDGE: 14
  };

  public WARNING_MESSAGE = {
    VERSION: 'Your browser version is not officially supported. Please upgrade your browser for the best user experience.',
    TYPE: 'Your browser is not officially supported. For the best experience switch to the latest version of Chrome or Safari.',
    UNKNOWN: 'For the best experience use the latest version of Chrome or Safari'
  };

  public state = {
    visible: false,
    warningMessage: '',
  };

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.browserCheck(this.getBrowserInfo());
  }

  public setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

  public  getBrowserInfo() {
    return detect();
  }

  public browserCheck(browser: any) {
    const userBrowserAcknowledgement = sessionStorage.getItem('userBrowserAcknowledgement');
    if (userBrowserAcknowledgement === 'true') {
      this.setState('visible', false);
    }
    if (browser != null && browser.name != null && browser.version != null) {
        const version = browser.version.toString().split('.')[0];
        if (browser.name === 'chrome' || browser.name === 'crios') {
          if (Number(version) < this.MIN_BROWSER_VERSION.CHROME) {
            this.setState('warningMessage' , this.WARNING_MESSAGE.VERSION);
            this.setState('visible', true);
          }
        } else if (browser.name === 'firefox') {
          if (Number(version) < this.MIN_BROWSER_VERSION.FIREFOX) {
            this.setState('warningMessage' , this.WARNING_MESSAGE.VERSION);
            this.setState('visible', true);
          }
        } else if (browser.name === 'safari' || browser.name === 'ios') {
          if (Number(version) < this.MIN_BROWSER_VERSION.SAFARI) {
            this.setState('warningMessage' , this.WARNING_MESSAGE.VERSION);
            this.setState('visible', true);
          }
        } else if (browser.name === 'edge') {
          if (Number(version) < this.MIN_BROWSER_VERSION.EDGE) {
            this.setState('warningMessage' , this.WARNING_MESSAGE.VERSION);
            this.setState('visible', true);
          }
        } else {
          this.setState('warningMessage' , this.WARNING_MESSAGE.TYPE);
          this.setState('visible', true);
        }
    } else {
      this.setState('warningMessage' , this.WARNING_MESSAGE.UNKNOWN);
      this.setState('visible', true);
    }
}

  public closeBrowserWarningMessage() {
    this.setState('visible' , false);
    this.userAcknowledgement();
  }

  public userAcknowledgement() {
    sessionStorage.setItem('userBrowserAcknowledgement', 'true');
  }

}
