import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import moment from 'moment';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelect2Component } from 'src/app/pages/ui-components/cm-select2/cm-select2.component';
import { vehicleManagemet } from 'src/assets/forms_control/vehicleMng';
import { MY_FORMATS } from '../../update-company/update-company.component';
import { Dialog } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vehicle-management',
  imports: [MaterialModule,CmInputComponent,CmSelect2Component],
  templateUrl: './vehicle-management.component.html',
  styleUrl: './vehicle-management.component.scss',
  providers:[{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class VehicleManagementComponent implements OnInit{
  constructor(private modal:Dialog,@Inject(MAT_DIALOG_DATA) public data: any){}
  headerName:string = "Add Vehicle Details";
    date = new FormControl(moment());
  vehicleForm =new vehicleManagemet();
  ngOnInit(): void {
    if(this.data.mode == "add") 
      this.headerName = "Add Vehicle Details";
    else if(this.data.mode == "upd")
      this.headerName = "Update Vehicle Details";
    else if(this.data.mode == "del")
      this.headerName = "Remove Vehicle Details";
  }
  CloseModal(){
    this.modal.closeAll();
  }
  submit(){

  }
}
