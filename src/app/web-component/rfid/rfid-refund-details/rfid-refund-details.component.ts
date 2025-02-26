import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { requestRfid } from 'src/assets/forms_control/requestRfid';

@Component({
  selector: 'app-rfid-refund-details',
  imports: [MaterialModule, AppTablesComponent],
  templateUrl: './rfid-refund-details.component.html',
  styleUrl: './rfid-refund-details.component.scss'
})
export class RfidRefundDetailsComponent {

  totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "Type", "FieldName": "type", "type": "string" },
    { "Head": "Transaction ID", "FieldName": "requestId", "type": "number" },
    { "Head": "Amount", "FieldName": "reqAmt", "type": "string" },
    { "Head": "Quantity", "FieldName": "reqQty", "type": "string" },
    { "Head": "Company ID", "FieldName": "approvedAmt", "type": "string" },
    { "Head": "Status", "FieldName": "approvedQty", "type": "string" },
    { "Head": "Refund Time", "FieldName": "requestedDateTime", "type": "string" },
    { "Head": "Approved Count", "FieldName": "approvedDateTime", "type": "string" },
    { "Head": "Approved Quantity", "FieldName": "status", "type": "string" },
    { "Head": "Reason", "FieldName": "status", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _reqData: requestRfid, private dialog: MatDialog, private router: Router) {
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
