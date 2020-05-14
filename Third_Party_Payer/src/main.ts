import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { NgElement, WithProperties } from '@angular/elements';
import { TppConfirmationComponent } from './shared/modules/ae-third-party-payer/components/tpp-confirmation/tpp-confirmation.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

console.log('Main TS');

// Create element
const tppElement: NgElement &
  WithProperties<TppConfirmationComponent> = document.createElement(
  'tpp-confirmation'
) as any;
// Add to the DOM
document.body.appendChild(tppElement);
