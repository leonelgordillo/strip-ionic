import { Component } from '@angular/core';
import {Stripe} from '@capacitor-community/stripe';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    Stripe.initialize({
      publishableKey: 'pk_test_ganRuPZhUk1RNvnlpzyF5iyP00dRewyhNG',
    });
  }
}
