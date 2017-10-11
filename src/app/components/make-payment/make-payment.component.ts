import { Component, OnInit, HostListener } from '@angular/core';

//import service and environment
import { PaymentService } from '../../services/payment.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  handler: any;
  amount: number = 500; // 500 amount = $5.00


  constructor(
    private paymentThang: PaymentService
  ) { }

  ngOnInit() {
    // this.handler = StripeCheckout.configure({
    //   key: environment.stripeKey,
    //   image: '',
    //   locale: 'auto',
    //   token: token => {
    //      this.paymentThang.processPayment(token, this.amount)
    //   }
    // })
  }

  handlePayment() {
    this.handler.open({
      name: 'startdb',
      description: 'deposit funds to account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close()
  }

}
