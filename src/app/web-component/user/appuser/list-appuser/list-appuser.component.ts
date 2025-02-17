import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { VehicleManagementComponent } from '../../vehicle/vehicle-management/vehicle-management.component';
import { appUserMng } from 'src/assets/forms_control/appuserMng';
import { MatDialog } from '@angular/material/dialog';
import { AppuserManagementComponent } from '../appuser-management/appuser-management.component';

@Component({
  selector: 'app-list-appuser',
  imports: [MaterialModule,AppTablesComponent],
  templateUrl: './list-appuser.component.html',
  styleUrl: './list-appuser.component.scss',
  providers:[appUserMng,AppuserManagementComponent]
})
export class ListAppuserComponent {
totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "App User ID", "FieldName": "appUserId", "type": "number" },
    { "Head": "Name", "FieldName": "name", "type": "string" },
    { "Head": "Father Name", "FieldName": "fatherName", "type": "string" },
    { "Head": "Date Of Birth", "FieldName": "dateOfBirth", "type": "string" },
    { "Head": "Adhar Number", "FieldName": "adharNo", "type": "string" },
    { "Head": "Driving License Number", "FieldName": "drivingLicNo", "type": "string" },
    { "Head": "Gender", "FieldName": "gender", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _appUser: appUserMng, private dialog: MatDialog) {
    this._vehicleData = _appUser.data;
    this.totalRecords = _appUser.data.length;
  }


  OnTabChange(status: number) {
  }

  //Common Functionalities
  onPager(pager: number) {
  }

  onRecordPageChange(recordPerPage: number) {
  }

  onPageSearch(search: string) {

  }

  SearchWithId(_searchItem: any) {
  }

  AddVehicle() {
    this.dialog.open(AppuserManagementComponent, {
      data:{mode:"add"}
    });
  }
}
