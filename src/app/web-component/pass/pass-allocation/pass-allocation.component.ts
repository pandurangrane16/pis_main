import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { rfidRefundRequest } from 'src/assets/forms_control/rfidRefundDetails';

@Component({
  selector: 'app-pass-allocation',
  imports: [MaterialModule, AppTablesComponent],
  templateUrl: './pass-allocation.component.html',
  styleUrl: './pass-allocation.component.scss',
  providers:[rfidRefundRequest]
})
export class PassAllocationComponent {

  totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "Type", "FieldName": "type", "type": "string" },
    { "Head": "Transaction ID", "FieldName": "transactionId", "type": "number" },
    { "Head": "Amount", "FieldName": "amount", "type": "string" },
    { "Head": "Quantity", "FieldName": "quantity", "type": "string" },
    { "Head": "Company ID", "FieldName": "companyId", "type": "string" },
    { "Head": "Status", "FieldName": "status", "type": "string" },
    { "Head": "Refund Time", "FieldName": "refundRequestDate", "type": "string" },
    { "Head": "Approved Count", "FieldName": "approvedCount", "type": "string" },
    { "Head": "Approved Amount", "FieldName": "approvedAmount", "type": "string" },
    { "Head": "Reason", "FieldName": "status", "reason": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _reqData: rfidRefundRequest, private dialog: MatDialog, private router: Router) {
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
