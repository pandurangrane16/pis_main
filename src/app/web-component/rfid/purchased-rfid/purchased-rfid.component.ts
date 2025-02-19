import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { requestRfid } from 'src/assets/forms_control/requestRfid';

@Component({
  selector: 'app-purchased-rfid',
  imports: [MaterialModule,AppTablesComponent],
  templateUrl: './purchased-rfid.component.html',
  styleUrl: './purchased-rfid.component.scss',
  providers:[requestRfid]
})
export class PurchasedRfidComponent {
totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _purchasedData: any[] = [];
  displayedColumnsComp = [
    { "Head": "Request ID", "FieldName": "requestRfid", "type": "number" },
    { "Head": "Request Amount", "FieldName": "amount", "type": "string" },
    { "Head": "Request Quantity", "FieldName": "reqQty", "type": "string" },
    { "Head": "Approved Quantity", "FieldName": "approvedQty", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _reqData: requestRfid, private dialog: MatDialog) {
    this._purchasedData = _reqData.purchasedRfid;
    this.totalRecords = _reqData.purchasedRfid.length;
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
  CloseModal() {
    this.dialog.closeAll();
  }
}
