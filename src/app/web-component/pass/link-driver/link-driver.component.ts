import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmTableComponent } from 'src/app/pages/ui-components/cm-table/cm-table.component';
import { LinkDriver } from 'src/assets/forms_control/linkDriver';

@Component({
  selector: 'app-link-driver',
  imports: [MaterialModule,CmTableComponent,CmInputComponent,CmButtonComponent],
  templateUrl: './link-driver.component.html',
  styleUrl: './link-driver.component.scss',
  providers:[LinkDriver]
})
export class LinkDriverComponent implements OnInit {
  displayedColumnsVehicles = [
    { "header": "", "fieldValue": "check", "type": "check", "position": "1" },
    { "header": "Vehicle No", "fieldValue": "vehicleNo", "type": "string", "position": "2" },
    { "header": "Category", "fieldValue": "category", "type": "string", "position": "3" },
    { "header": "From", "fieldValue": "from", "type": "string", "position": "4" },
    { "header": "To", "fieldValue": "to", "type": "string", "position": "5" },
    { "header": "Permitted Gate", "fieldValue": "permittedGate", "type": "string", "position": "6" }
  ];
  displayedColumnsMans = [
    { "header": "", "fieldValue": "check", "type": "check", "position": "1" },
    { "header": "User Name", "fieldValue": "vehicleNo", "type": "string", "position": "2" },
    { "header": "Category", "fieldValue": "category", "type": "string", "position": "3" },
    { "header": "From", "fieldValue": "from", "type": "string", "position": "4" },
    { "header": "To", "fieldValue": "to", "type": "string", "position": "5" },
    { "header": "Permitted Gate", "fieldValue": "permittedGate", "type": "string", "position": "6" }
  ];
  gridArrayVehicle:any;
  gridArrayMan:any;
  headerName1 :string =  "Vehicle Details";
  headerName2 :string =  "Man Details";
  linkPassForm: any;

  constructor(private fb: FormBuilder,public linkData  :LinkDriver){

  }
  ngOnInit(): void {
    this.linkPassForm = this.fb.group({
            vehicleId : ['', [Validators.required, Validators.pattern("[A-Za-z0-9][A-Za-z0-9 ]*$")]],
            vehicleNumber : [''],
            appUserId : ['', Validators.required],
            appUserName:[''],
            fathersName : [''],
            drivingLicenseNo : ['']
          });
    this.gridArrayMan = this.linkData.manData;
    this.gridArrayVehicle = this.linkData.vehicleData;
  }
  buttonTriggered(evt:any) {
    
  }
}
