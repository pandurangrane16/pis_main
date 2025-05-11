import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { vehicleManagemet } from 'src/assets/forms_control/user/vehicleMng';
import { VehicleManagementComponent } from '../vehicle-management/vehicle-management.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-vehicle',
  imports: [MaterialModule, AppTablesComponent,],
  templateUrl: './list-vehicle.component.html',
  styleUrl: './list-vehicle.component.scss',
  providers: [vehicleManagemet, VehicleManagementComponent]
})
export class ListVehicleComponent {
  totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "Vehicle ID", "FieldName": "vehicleId", "type": "number" },
    { "Head": "Chasis No.", "FieldName": "chasisNo", "type": "string" },
    { "Head": "Vehicle No.", "FieldName": "vehicleNo", "type": "string" },
    { "Head": "Registration Certificate No.", "FieldName": "registrationNo", "type": "string" },
    { "Head": "Insurance Valid Upto", "FieldName": "insuranceValidTo", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _vehicle: vehicleManagemet, private dialog: MatDialog) {
    this._vehicleData = _vehicle.data;
    this.totalRecords = _vehicle.data.length;
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
    this.dialog.open(VehicleManagementComponent, {
      data:{mode:"add"}
    });
  }
}
