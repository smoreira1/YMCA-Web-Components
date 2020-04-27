import { Injectable } from '@angular/core';
import { detect } from 'detect-browser';

@Injectable({
  providedIn: 'root'
})
export class BrowserConfigService {

  constructor() { }

  isCookiesEnabled(): boolean {
    let cookieEnabled = navigator.cookieEnabled;
    if (!cookieEnabled) {
      document.cookie = "testcookie";
      cookieEnabled = document.cookie.indexOf("testcookie") != -1;
    }
    return cookieEnabled;
  }

  isInternetExplorer(): boolean{
    const browserInfo = detect();
    if(browserInfo.name === 'ie'){
      return true;
    }
    else{
      return false;
    }
  }

}
