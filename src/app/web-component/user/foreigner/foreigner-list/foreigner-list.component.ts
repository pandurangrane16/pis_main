import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { foreignerMng } from 'src/assets/forms_control/user/foreignerMng';
import { ForeignerMngComponent } from '../foreigner-mng/foreigner-mng.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-foreigner-list',
  imports: [MaterialModule,AppTablesComponent],
  templateUrl: './foreigner-list.component.html',
  styleUrl: './foreigner-list.component.scss',
  providers:[foreignerMng,ForeignerMngComponent]
})
export class ForeignerListComponent {
totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "Name", "FieldName": "name", "type": "string" },
    { "Head": "Father Name", "FieldName": "fatherName", "type": "string" },
    { "Head": "Date Of Birth", "FieldName": "dateOfBirth", "type": "string" },
    { "Head": "Gender", "FieldName": "gender", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];
  constructor(public _appUser: foreignerMng, private dialog: MatDialog) {
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

  AddForeigner() {
    this.dialog.open(ForeignerMngComponent, {
      data:{mode:"add"}
    });
  }
}
