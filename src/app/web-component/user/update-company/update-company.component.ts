import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import * as _moment from 'moment';
import moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-update-company',
  imports: [MaterialModule,CmInputComponent],
  templateUrl: './update-company.component.html',
  styleUrl: './update-company.component.scss',
  providers:[{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})

export class UpdateCompanyComponent implements OnInit {
  inputJson:any;
  date = new FormControl(moment());
  country: Food[] = [
    { value: 'steak-0', viewValue: 'USA' },
    { value: 'pizza-1', viewValue: 'India' },
    { value: 'tacos-2', viewValue: 'France' },
    { value: 'tacos-3', viewValue: 'UK' },
  ];

  selectedCountry = this.country[2].value;

  city: Food[] = [
    { value: 'steak-0', viewValue: 'Mexico' },
    { value: 'pizza-1', viewValue: 'Mumbai' },
    { value: 'tacos-2', viewValue: 'Tokyo' },
    { value: 'tacos-3', viewValue: 'New York' },
  ];

  selectedCity = this.city[1].value;

  state: Food[] = [
    { value: 'steak-0', viewValue: 'Cuba' },
    { value: 'pizza-1', viewValue: 'Djibouti' },
    { value: 'tacos-2', viewValue: 'Bulgaria' },
    { value: 'tacos-3', viewValue: 'Cabo Verde' },
  ];

  selectedState = this.state[3].value;

  ngOnInit(): void {
    this.inputJson = {
      labelClass : "f-w-600 m-b-8 d-block",
      labelHeader : "Company Name",
      placeholder : "Company Name",
      appearance : "outline",
      color : "primary",
      formFieldClass: "w-100"
    }
  }
}



interface Food {
  value: string;
  viewValue: string;
}