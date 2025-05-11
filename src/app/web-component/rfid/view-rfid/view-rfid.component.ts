import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { viewRfid } from 'src/assets/forms_control/user/viewRfid';

@Component({
  selector: 'app-view-rfid',
  imports: [MaterialModule, AppTablesComponent],
  templateUrl: './view-rfid.component.html',
  styleUrl: './view-rfid.component.scss',
  providers:[viewRfid]
})
export class ViewRfidComponent {

  totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "Rfid Number", "FieldName": "rfidNo", "type": "string" },
    { "Head": "Type", "FieldName": "type", "type": "string" },
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _reqData: viewRfid, private dialog: MatDialog, private router: Router) {
    this._vehicleData = _reqData.data;
    this.totalRecords = _reqData.data.length;
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


  PayControl() {
    this.router.navigate(['/user/payment']);
  }
}
