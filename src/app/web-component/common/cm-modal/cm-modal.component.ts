import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelectComponent } from 'src/app/pages/ui-components/cm-select/cm-select.component';

@Component({
  selector: 'app-cm-modal',
  imports: [MaterialModule,CmInputComponent,CmSelectComponent,CommonModule],
  standalone:true,
  templateUrl: './cm-modal.component.html',
  styleUrl: './cm-modal.component.scss'
})
export class CmModalComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  settings:any;
  inputReqRfid:any;
  inputReqAmount:any;
  constructor(private _modal:Dialog,@Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit() {
    this.settings = {
      lableClass:"f-w-600 m-b-8 d-block",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      labelHeader : "RFID Type",
      options:[{"name":"RFID Card (Person)", "value":"Card"},{"name":"RFID Tag (Vehicle)", "value":"Tag"}]
    }

    this.inputReqAmount = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Request Amount*",
      placeholder: "Request Amount",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: true
    }
    this.inputReqRfid = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Request Quantity*",
      placeholder: "Request Quantity",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: false
    }
    console.log(this.data);
  }
  @Input() _controls: any;
  inputJson: any;

  closeModal(){
    this._modal.closeAll();
  }
  uploadDoc(){
    if(this.data.type == "doc") {
      this._snackBar.open("Document Uploaded Successfully...!","", {
        duration: 3000,
        panelClass: ['green-snackbar'],
       });  
    } else 
    if(this.data.type == "rfid") {
      this._snackBar.open("Request Submitted Successfully...!","", {
        duration: 3000,
        panelClass: ['green-snackbar'],
       });  
    }
     this.closeModal();
  }
}
