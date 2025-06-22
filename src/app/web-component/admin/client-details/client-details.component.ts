import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelect2Component } from 'src/app/pages/ui-components/cm-select2/cm-select2.component';
import { CmTableComponent } from 'src/app/pages/ui-components/cm-table/cm-table.component';
import { ClientDetails } from 'src/assets/forms_control/admin/clientDetails';

@Component({
  selector: 'app-client-details',
  imports: [MaterialModule,CommonModule,CmInputComponent,CmButtonComponent],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss',
  standalone:true
})
export class ClientDetailsComponent implements OnInit {
  clientDetailsForm  :any;
  private _snackBar = inject(MatSnackBar);
  headerName : string= "Client Details";
  clientControls=new ClientDetails();
  constructor(private fb:FormBuilder)
  {}

  ngOnInit(): void {
    this.clientDetailsForm = this.fb.group({
            clientCode : ['',Validators.required],
            name : ['',Validators.required],
            email: ['',Validators.required],
            tagline :['',Validators.required],
            contactNo : ['',Validators.required],
            address : ['',Validators.required],
            icon : ['',Validators.required],
          });  
          
  }

  buttonTriggered(evt:any){
    if(evt == "submit"){
      console.log(this.clientDetailsForm.controls);
      this._snackBar.open("Client details updated successfully...!","", {
        duration: 3000,
        panelClass: ['success-snackbar']
       });  
    }
    else if(evt == "cancel")
    {

    }
  }

}
