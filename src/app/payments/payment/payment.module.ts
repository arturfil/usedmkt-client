import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//service and component
import { PaymentService } from '../../services/payment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
