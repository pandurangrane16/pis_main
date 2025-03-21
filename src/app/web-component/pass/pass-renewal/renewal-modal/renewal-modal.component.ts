import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelectComponent } from 'src/app/pages/ui-components/cm-select/cm-select.component';
import { RenewalPass } from 'src/assets/forms_control/renewalPass';

@Component({
  selector: 'app-renewal-modal',
  imports: [MaterialModule,CmInputComponent,CmSelectComponent,CmButtonComponent],
  templateUrl: './renewal-modal.component.html',
  styleUrl: './renewal-modal.component.scss',
  providers : [RenewalModalComponent,RenewalPass]
})
export class RenewalModalComponent implements OnInit {
  renewalForm: any;private _snackBar = inject(MatSnackBar);
  renPass=new RenewalPass();
  headerName :string = "Renewal - Pass Allocation";

  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private modal:MatDialog)
  {

  }
  ngOnInit(): void {
    this.renewalForm = this.fb.group({
      passType : [{ value: '', disabled: true },Validators.required],
      category : ['',Validators.required],
      noOfDays : [{ value: '', disabled: true },Validators.required],
      reqQty : [{ value: '', disabled: true },Validators.required],
      amount : [{ value: '', disabled: true },Validators.required],
      placeOfWork : [{ value: '', disabled: true },Validators.required],
      zoneAreaId : [null,Validators.required]
    })
  }

  buttonTriggered(evt:any){
    this._snackBar.open("Saved Successfully...!","", {
      duration: 3000,
      panelClass: ['green-snackbar'],
     });  

     this.modal.closeAll();
  }
}
