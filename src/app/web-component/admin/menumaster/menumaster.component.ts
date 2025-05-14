import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmToggleComponent } from 'src/app/pages/ui-components/cm-toggle/cm-toggle.component';
import { MenuMaster } from 'src/assets/forms_control/admin/menuMaster';

@Component({
  selector: 'app-menumaster',
  imports: [CmInputComponent, CmButtonComponent, MaterialModule, CmToggleComponent],
  templateUrl: './menumaster.component.html',
  styleUrl: './menumaster.component.scss'
})
export class MenumasterComponent {
  headerName: string = "Menu Management";
  menuMasterForm: any;
  clientControls = new MenuMaster();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.menuMasterForm = this.fb.group({
      menuName: ['', Validators.required],
      menuPath: ['', Validators.required],
      parentId: ['', Validators.required],
      displayOrder: ['', Validators.required],
      icon: ['', Validators.required],
      isActive: [true, Validators.required],
      createdDate: [''],
      createdBy: [''],
    });
  }

  
  buttonTriggered(evt: any) {
    console.log(evt);
  }
}

