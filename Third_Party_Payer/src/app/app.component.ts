import { Component, ViewEncapsulation } from '@angular/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TppConfirmationComponent } from 'src/shared/modules/ae-third-party-payer/components/tpp-confirmation/tpp-confirmation.component';

@Component({
  selector: 'app-root , ae-third-party-payer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Third Party Payer';

  constructor(injector: Injector,) {
      const ymcaTppConfirmationElement = createCustomElement(TppConfirmationComponent, {injector});
      customElements.define('ymca-tpp-confirmation', ymcaTppConfirmationElement);
  }

}
