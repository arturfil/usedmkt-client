import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.css']
})
export class StripeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: environment.stripeKey,
      locale: 'auto',
      token: function(token: any) {

      }
    });

    handler.open({
      name: '$UsedMkt',
      description: '2 widgets',
      amount: 2000
    });
  }

}
