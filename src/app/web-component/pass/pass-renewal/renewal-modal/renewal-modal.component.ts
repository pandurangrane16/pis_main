import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelectComponent } from 'src/app/pages/ui-components/cm-select/cm-select.component';
import { RenewalPass } from 'src/assets/forms_control/renewalPass';

@Component({
  selector: 'app-renewal-modal',
  imports: [MaterialModule,CmInputComponent,CmSelectComponent],
  templateUrl: './renewal-modal.component.html',
  styleUrl: './renewal-modal.component.scss',
  providers : [RenewalModalComponent,RenewalPass]
})
export class RenewalModalComponent implements OnInit {
  renewalForm: any;
  renPass=new RenewalPass();
  headerName :string = "Renewal - Pass Allocation";

  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private renewalPass : RenewalPass)
  {

  }
  ngOnInit(): void {
    this.renewalForm = this.fb.group({
      passType : ['',Validators.required],
      category : ['',Validators.required],
      noOfDays : ['',Validators.required],
      reqQty : [0,Validators.required],
      amount : ['',Validators.required],
      placeOfWork : ['',Validators.required],
      zoneAreaId : ['',Validators.required]
    })
  }


}
