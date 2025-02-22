import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { paymentControl } from 'src/assets/forms_control/paymentControl';

@Component({
  selector: 'app-payment-control',
  imports: [MaterialModule,CmInputComponent],
  templateUrl: './payment-control.component.html',
  styleUrl: './payment-control.component.scss',
})
export class PaymentControlComponent implements OnInit {
  paymentFormControl =new paymentControl();
  paymentForm: any;
  data :any;
  constructor(private fb: FormBuilder,){
    
  }
  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern("[A-Za-z0-9][A-Za-z0-9 ]*$")]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
    });
    this.data = this.paymentFormControl.data;
    
    this.paymentForm.patchValue({
      amount:this.data.amount,
      companyName: this.data.company,
      email: this.data.email,
      contactNo: this.data.contact,
      paymentType: this.data.paymentType,
    })
  }
}
