import { Component, Inject, inject, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelect2Component } from 'src/app/pages/ui-components/cm-select2/cm-select2.component';
import { MY_FORMATS } from '../../user/update-company/update-company.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import moment from 'moment';
import { CartTicketManagement } from 'src/assets/forms_control/user/cargolist';
import { CmToggleComponent } from 'src/app/pages/ui-components/cm-toggle/cm-toggle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-cargo',
  imports: [MaterialModule, CmButtonComponent, CmInputComponent, CmSelect2Component, CmToggleComponent,CommonModule],
  templateUrl: './view-cargo.component.html',
  styleUrl: './view-cargo.component.scss',
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }, CartTicketManagement]
})
export class ViewCargoComponent implements OnInit {
  date = new FormControl(moment());
  readonly dialog = inject(MatDialog);
  linkMng = new CartTicketManagement();
  viewCargoForm: any;
  CargoHeader:string = "Container Details";
  CargoType:number = 0;
  headerName: string = "View Cargo";
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private linkData: CartTicketManagement) {

  }
  ngOnInit(): void {
    this.viewCargoForm = this.fb.group({
      passageDate: [{value : '',disabled:this.linkMng.selectTransporterName.isDisabled},[Validators.required]],
      transporterName: [{value : '',disabled:this.linkMng.selectTransporterName.isDisabled},[Validators.required]],
      vehicleNo: [{value : '',disabled:this.linkMng.inputVehicleNo.isDisabled},[Validators.required]],
      cargoType: [{value : '',disabled:this.linkMng.selectCargoType.isDisabled},[Validators.required]],
      mlo: [{value : '',disabled:this.linkMng.inputMLO.isDisabled},[Validators.required]],
      hazardous: [false, Validators.required],
      containerNo: [''],
      cnfAgent: [''],
      oocNo:[''],
      blNo:[''],
      shipperName: [''],
      shippingBill: [''],
      vesselName: [''],
      commodity: [''],
      sealOtlNo: [''],
      containerType: [''],
      voyageNo: [''],
      size: [''],
      stuffing: [''],
      customsSeal:[''],
      deliveryOrderNo : [''],
      destuffing: [''],
      remarks: ['']
    });
  }
  buttonTriggered(evt: any) {

  }

  changeCargo(evt:any){
    console.log(evt);
    this.viewCargoForm.patchValue({"cargoType" : evt.option.value.value}) ;
    this.CargoType= evt.option.value.value;
    console.log(this.CargoType);
    if(this.CargoType == 1)
      this.CargoHeader = "Container Details";
    else if(this.CargoType == 2)
      this.CargoHeader = "Bulk Cargo Details";
    else if(this.CargoType == 3)
      this.CargoHeader = "Other Cargo Details";
  }
}
