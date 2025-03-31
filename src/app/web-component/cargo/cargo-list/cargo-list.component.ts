import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmTableComponent } from 'src/app/pages/ui-components/cm-table/cm-table.component';
import { cargolist } from 'src/assets/forms_control/cargolist';
import { ViewCargoComponent } from '../view-cargo/view-cargo.component';

@Component({
  selector: 'app-cargo-list',
  imports: [CmTableComponent,CmButtonComponent,MaterialModule],
  templateUrl: './cargo-list.component.html',
  styleUrl: './cargo-list.component.scss',
  providers:[cargolist,ViewCargoComponent] 
})
export class CargoListComponent {
private _snackBar = inject(MatSnackBar);
  totalPages: number = 10;
  pager: number = 1;

  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "header": "Cargo ID", "fieldValue": "cargoId", "type": "string", "position": "1" },
    { "header": "Passage Date", "fieldValue": "passageDate", "type": "string", "position": "2" },
    { "header": "Company Name", "fieldValue": "companyName", "type": "string", "position": "3" },
    { "header": "Vehicle No", "fieldValue": "vehicleNo", "type": "string", "position": "4" },
    { "header": "Cargo Type", "fieldValue": "cargoType", "type": "string", "position": "5" },
    { "header": "Mode", "fieldValue": "mode", "type": "string", "position": "6" },
    { "header": "Status", "fieldValue": "status", "type": "string", "position": "7" },
    { "header": "Rejection Reason", "fieldValue": "rejectReason", "type": "string", "position": "8" },
    { "header": "Actions", "fieldValue": "button", "type": "button", "position": "9" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" },{ "name": "Print", "icon": "icon-eye", "tip": "Print", "action": "print" }, { "name": "Cancel", "icon": "icon-trash", "tip": "Cancel", "action": "remove" }];
  constructor(public _reqData: cargolist, private dialog: MatDialog, private router: Router) {
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

  buttonTriggered(evt: any) {
    console.log(evt)
  }

  buttonClickedTab(evt: any) {
    console.log(evt);
    if(evt.event.return == "VW") {
      this.dialog.open(ViewCargoComponent, {
               // Ensure data is passed correctly
            });
    }
  }

}
