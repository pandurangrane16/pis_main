import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelectComponent } from 'src/app/pages/ui-components/cm-select/cm-select.component';
import { refundRequest } from 'src/assets/forms_control/user/refundRequest';

@Component({
  selector: 'app-rfid-refund',
  imports: [MaterialModule,CommonModule,CmSelectComponent,CmInputComponent],
  templateUrl: './rfid-refund.component.html',
  styleUrl: './rfid-refund.component.scss'
})
export class RfidRefundComponent implements OnInit {
  
  settings=new refundRequest();
  ngOnInit(): void {
   let options= [
      {"name": "RFID Card - Person","value": "Card"}, 
      { "name": "RFID Tag - Vehicle", "value": "Tag" }
  ]
    this.settings.options = options;
  }
}
