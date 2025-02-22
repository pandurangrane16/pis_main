import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-rfid-refund',
  imports: [MaterialModule,CommonModule],
  templateUrl: './rfid-refund.component.html',
  styleUrl: './rfid-refund.component.scss'
})
export class RfidRefundComponent {

}
