import { CommonModule } from '@angular/common';
import { Component, forwardRef, Inject, inject, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import moment from 'moment';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelect2Component } from 'src/app/pages/ui-components/cm-select2/cm-select2.component';
import { LinkManagement } from 'src/assets/forms_control/linkMng';
import { MY_FORMATS } from '../../user/update-company/update-company.component';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';

@Component({
  selector: 'app-link-management',
  imports: [MaterialModule,CommonModule,CmInputComponent,CmSelect2Component,CmButtonComponent],
  templateUrl: './link-management.component.html',
  styleUrl: './link-management.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LinkManagementComponent),
      multi: true
    },{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
          {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class LinkManagementComponent implements OnInit,ControlValueAccessor {
  @Input() passType : any;
  value :string;
  readonly dialog = inject(MatDialog);
  linkMng=new LinkManagement();
  linkPassForm: any;
  headerName:string = "Link Pass";
  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any){
    
  }

  // Called when the value changes from the input
  onChange(event: any) {
    this.value = event;
    this._onChange(event);
  }

  // Methods from ControlValueAccessor
  writeValue(value: any): void {
    this.value = value;
  }

  // Register change handler
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  // Register touch handler
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  private _onChange = (_: any) => {};
  private _onTouched = () => {};
    date = new FormControl(moment());

  ngOnInit(): void {
      this.linkPassForm = this.fb.group({
        passType : ['', [Validators.required, Validators.pattern("[A-Za-z0-9][A-Za-z0-9 ]*$")]],
        vehicleNumber : [''],
        rfidNumber : [''],
        validFrom: ['',Validators.required],
        validTill : ['',Validators.required],
        permittedGate : ['',Validators.required],
        entryPurpose : ['',Validators.required],
        zone : ['',[Validators.required]],
        workPlace : ['',Validators.required]
      });
      //this.data = this.linkMng.data;
      console.log(this.data);
      this.linkPassForm.patchValue({
        passType : this.data.inputJson.passType,
      })
    }

    buttonTriggered(evt:any){
      
    }
 
}
