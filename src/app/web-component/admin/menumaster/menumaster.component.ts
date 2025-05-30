import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmToggleComponent } from 'src/app/pages/ui-components/cm-toggle/cm-toggle.component';
import { MenuMaster } from 'src/assets/forms_control/admin/menuMaster';
import { CmSelect2Component } from "../../../pages/ui-components/cm-select2/cm-select2.component";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menumaster',
  imports: [CmInputComponent, CmButtonComponent, MaterialModule, CmToggleComponent, CmSelect2Component,CommonModule],
  templateUrl: './menumaster.component.html',
  styleUrl: './menumaster.component.scss'
})
export class MenumasterComponent {
  headerName: string = "Menu Management";
  menuMasterForm: FormGroup;
  clientControls = new MenuMaster();
  selectedFileNames:any;
  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data._formData);
    this.menuMasterForm = this.data._formData;
  }

  
  buttonTriggered(evt: any) {
    console.log(evt);
  }
}

