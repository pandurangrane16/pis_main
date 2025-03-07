import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent } from 'src/app/pages/ui-components/tables/tables.component';
import { userJson } from 'src/assets/jsons/userJson';
import { CmModalComponent } from '../../common/cm-modal/cm-modal.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
@Component({
  selector: 'app-company-details',
  standalone:true,
  imports: [MaterialModule,AppTablesComponent],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss',
  providers:[userJson]
})
export class CompanyDetailsComponent implements OnInit{
  _dispCols : any;
  readonly dialog = inject(MatDialog);
  _compData :any[] = [];
  _docData :any[]=[];
  displayedColumnsComp = [
    { "Head": "ID", "FieldName": "id", "type": "number" },
    { "Head": "Company Name", "FieldName": "companyName", "type": "string" },
    { "Head": "Email", "FieldName": "email", "type": "string" },
    { "Head": "Contact Number", "FieldName": "mobileNo", "type": "string" },
    { "Head": "Validity", "FieldName": "validity", "type": "string" },
  ];
  displayedColumnsDoc = [
    { "Head": "Document Name", "FieldName": "docName", "type": "string" },
    { "Head": "Uploaded On", "FieldName": "uploadedOn", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];

  constructor(private _json : userJson){

  }
  ngOnInit(): void {
    this._compData.push(this._json.companyData);
    this._docData.push(this._json.documentData);
  }

  uploadDoc(){
    //const modalRef = this.dialog.open(CmModalComponent);
    let inputJson = {
      labelClass : "f-w-600 m-b-8 d-block",
      labelHeader : "Document Name*",
      placeholder : "Document Name",
      appearance : "outline",
      color : "primary",
      formFieldClass: "w-100",
      type : "doc"
    }
    this.dialog.open(CmModalComponent, {
      data: { inputJson }, // Ensure data is passed correctly
    });
  }

  onNoClick(): void {
   this.dialog.closeAll();
  }
}
