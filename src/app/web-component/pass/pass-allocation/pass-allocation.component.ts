import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CmTableComponent } from 'src/app/pages/ui-components/cm-table/cm-table.component';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { PassActivation } from 'src/assets/forms_control/passActivation';

@Component({
  selector: 'app-pass-allocation',
  imports: [MaterialModule,CmTableComponent],
  templateUrl: './pass-allocation.component.html',
  styleUrl: './pass-allocation.component.scss',
  providers:[PassActivation]
})
export class PassAllocationComponent {

  totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "header": "", "fieldValue": "check", "type": "check","position":"1" },
    { "header": "Pass Allocation ID", "fieldValue": "passAllocationId", "type": "string","position":"2" },
    { "header": "Type", "fieldValue": "type", "type": "string","position":"3" },
    { "header": "Category", "fieldValue": "category", "type": "string","position":"4" },
    { "header": "Transaction ID", "fieldValue": "transactionId", "type": "string" ,"position":"5"},
    { "header": "Approved Qty", "fieldValue": "approvedQty", "type": "string","position":"6" },
    { "header": "Amount", "fieldValue": "amount", "type": "string","position":"7" },
    { "header": "Requested Qty", "fieldValue": "requestedQty", "type": "string","position":"8" },
    { "header": "Payment Time", "fieldValue": "paymentDateTime", "type": "string","position":"9" },
    { "header": "Status", "fieldValue": "status", "type": "string","position":"10" },
    { "header": "Actions", "fieldValue": "button", "type": "button","position":"11" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _reqData: PassActivation, private dialog: MatDialog, private router: Router) {
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
