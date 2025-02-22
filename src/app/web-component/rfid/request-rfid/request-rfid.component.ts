import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { requestRfid } from 'src/assets/forms_control/requestRfid';
import { PurchasedRfidComponent } from '../purchased-rfid/purchased-rfid.component';
import { CmModalComponent } from '../../common/cm-modal/cm-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-rfid',
  imports: [MaterialModule, AppTablesComponent],
  templateUrl: './request-rfid.component.html',
  styleUrl: './request-rfid.component.scss',
  providers: [requestRfid, PurchasedRfidComponent,CmModalComponent]
})
export class RequestRfidComponent {
  totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "", "FieldName": "", "type": "check" },
    { "Head": "Type", "FieldName": "type", "type": "string" },
    { "Head": "Request ID", "FieldName": "requestId", "type": "number" },
    { "Head": "Request Amount", "FieldName": "reqAmt", "type": "string" },
    { "Head": "Request Quantity", "FieldName": "reqQty", "type": "string" },
    { "Head": "Approved Amount", "FieldName": "approvedAmt", "type": "string" },
    { "Head": "Approved Quantity", "FieldName": "approvedQty", "type": "string" },
    { "Head": "Requested Time", "FieldName": "requestedDateTime", "type": "string" },
    { "Head": "Approved Time", "FieldName": "approvedDateTime", "type": "string" },
    { "Head": "Status", "FieldName": "status", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _reqData: requestRfid, private dialog: MatDialog, private router:Router) {
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

  OpenModal(type: number) {
    if(type == 1){
      this.dialog.open(PurchasedRfidComponent, {
        data: { mode: "add" }
      });
    } else if(type == 0) {
      this.dialog.open(CmModalComponent, {
        data: { type: "rfid" }
      });
    }
  }

  PayControl(){
    this.router.navigate(['/user/payment']);
  }
}
