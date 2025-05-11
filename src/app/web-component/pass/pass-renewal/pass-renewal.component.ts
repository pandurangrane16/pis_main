import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import moment from 'moment';
import { MaterialModule } from 'src/app/material.module';
import { CmTableComponent } from 'src/app/pages/ui-components/cm-table/cm-table.component';
import { LinkManagement } from 'src/assets/forms_control/user/linkMng';
import { RenewalPass } from 'src/assets/forms_control/user/renewalPass';
import { RenewalModalComponent } from './renewal-modal/renewal-modal.component';

@Component({
  selector: 'app-pass-renewal',
  imports: [MaterialModule, CmTableComponent],
  templateUrl: './pass-renewal.component.html',
  styleUrl: './pass-renewal.component.scss',
  providers: [RenewalPass, RenewalModalComponent]
})
export class PassRenewalComponent {

  displayedColumnsComp = [
    { "header": "PassAllocationID", "fieldValue": "passAllocationId", "type": "string", "position": "1" },
    { "header": "RFID Number", "fieldValue": "rfidNumber", "type": "string", "position": "2" },
    { "header": "Valid From", "fieldValue": "validFrom", "type": "string", "position": "3" },
    { "header": "Valid Till", "fieldValue": "validTo", "type": "string", "position": "4" },
    { "header": "Linked To", "fieldValue": "linkedTo", "type": "string", "position": "5" },
    { "header": "Pass Type", "fieldValue": "passType", "type": "string", "position": "6" },
    { "header": "Actions", "fieldValue": "button", "type": "button", "position": "7" }
  ];
  headerName: string = "Request For Renewal";
  gridArray: any;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  totalPages: number = 10;
  pager: number = 1;
  constructor(private linkData: RenewalPass, public dialog: MatDialog) {

  }


  buttonTriggered(evt: any) {
    if (evt == "RNW") {
      this.dialog.open(RenewalModalComponent, {
        data: {  }, // Ensure data is passed correctly
      });
    }
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
  buttonClickedTab(evt: any) {
    if (evt.event.return == "RNW") {
      this.dialog.open(RenewalModalComponent, {
        data: {  }, // Ensure data is passed correctly
      });
    }
  }
  // Register change handler
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  // Register touch handler
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };
  date = new FormControl(moment());

  ngOnInit(): void {
    this.gridArray = this.linkData.linkingData;
  }

}
