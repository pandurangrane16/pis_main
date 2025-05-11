import { Component } from '@angular/core';
import { CmButtonComponent } from "../../../pages/ui-components/cm-button/cm-button.component";
import { MaterialModule } from 'src/app/material.module';
import { RoleMaster } from 'src/assets/forms_control/admin/roleMaster';
import { FormBuilder, Validators } from '@angular/forms';
import { CmToggleComponent } from "../../../pages/ui-components/cm-toggle/cm-toggle.component";
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';

@Component({
  selector: 'app-role-master',
  imports: [CmInputComponent,CmButtonComponent, MaterialModule, CmToggleComponent],
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.scss'
})
export class RoleMasterComponent {
  headerName: string = "Role Management";

  roleMasterForm: any;
  clientControls = new RoleMaster();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.roleMasterForm = this.fb.group({
      roleName: ['', Validators.required],
      description: ['', Validators.required],
      isActive: [true, Validators.required],
    });

  }

  buttonTriggered(evt: any) {
    console.log(evt);
  }

}
