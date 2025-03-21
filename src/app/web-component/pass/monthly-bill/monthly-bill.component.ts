import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import moment from 'moment';
import { MaterialModule } from 'src/app/material.module';
import { MY_FORMATS } from '../../user/update-company/update-company.component';

@Component({
  selector: 'app-monthly-bill',
  imports: [MaterialModule],
  templateUrl: './monthly-bill.component.html',
  styleUrl: './monthly-bill.component.scss',
  providers:[{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}]
})
export class MonthlyBillComponent {
  date = new FormControl(moment());
  headerName:string = "Monthly E-Bill";
}
