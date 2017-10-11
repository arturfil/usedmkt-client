import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment';

@Injectable()
export class PaymentService {

  baseUrl: string = environment.apiUrl;
  userId: string;

  constructor(
    private httpThang: HttpClient
  ) { }

  startPayment() {
    return this.httpThang.get(
      this.baseUrl + 'api/stripe'
    )
  }

  processPayment(token: any, amount) {
    const payment = { }
    // return this.baseUrl(`payments/${this.userId}`).push(payment)
  }

}
