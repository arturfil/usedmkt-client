import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//service and component
import { PaymentService } from '../../services/payment.service';
import { MakePaymentComponent } from '../../components/make-payment/make-payment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MakePaymentComponent
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
