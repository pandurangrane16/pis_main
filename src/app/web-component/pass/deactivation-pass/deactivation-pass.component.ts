import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import moment from 'moment';
import { MaterialModule } from 'src/app/material.module';
import { CmTableComponent } from 'src/app/pages/ui-components/cm-table/cm-table.component';
import { DeactivationPass } from 'src/assets/forms_control/user/deactivationPass';

@Component({
  selector: 'app-deactivation-pass',
  imports: [MaterialModule,CmTableComponent],
  templateUrl: './deactivation-pass.component.html',
  styleUrl: './deactivation-pass.component.scss',
  providers:[DeactivationPass]
})
export class DeactivationPassComponent {
  renewalForm: any;private _snackBar = inject(MatSnackBar);
displayedColumnsComp = [
    { "header": "PassAllocationID", "fieldValue": "passAllocationId", "type": "string", "position": "1" },
    { "header": "RFID Number", "fieldValue": "rfidNumber", "type": "string", "position": "2" },
    { "header": "Valid From", "fieldValue": "validFrom", "type": "string", "position": "3" },
    { "header": "Valid Till", "fieldValue": "validTo", "type": "string", "position": "4" },
    { "header": "Linked To", "fieldValue": "linkedTo", "type": "string", "position": "5" },
    { "header": "Pass Type", "fieldValue": "passType", "type": "string", "position": "6" },
    { "header": "Actions", "fieldValue": "button", "type": "button", "position": "7" }
  ];
  headerName: string = "Request For Deactivation of Pass";
  gridArray: any;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  totalPages: number = 10;
  pager: number = 1;
  constructor(private linkData: DeactivationPass, public dialog: MatDialog) {

  }


  buttonTriggered(evt: any) {
    console.log(evt)
    if (evt == "DA") {
      this._snackBar.open("Pass Deactivated Successfully...!","Deactivation Of Pass", {
        duration: 3000,
        panelClass: ['green-snackbar'],
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
    if (evt.event.return == "DA") {
      this._snackBar.open("Pass Deactivated Successfully...!","", {
        duration: 3000,
        panelClass: ['green-snackbar'],
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
