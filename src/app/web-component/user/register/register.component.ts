import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material.module';
import { CmButtonComponent } from 'src/app/pages/ui-components/cm-button/cm-button.component';
import { CmCheckboxComponent } from 'src/app/pages/ui-components/cm-checkbox/cm-checkbox.component';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelect2Component } from 'src/app/pages/ui-components/cm-select2/cm-select2.component';
import { RegisterForm } from 'src/assets/forms_control/common/registerForm';

@Component({
  selector: 'app-register',
  imports: [MaterialModule, CommonModule, CmInputComponent, CmButtonComponent, CmSelect2Component, CmCheckboxComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: any;
  private _snackBar = inject(MatSnackBar);
  headerName: string = "User Registration";
  clientControls = new RegisterForm();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [0, Validators.required],
      userName: ['', Validators.required],
      companyName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      state: ['', Validators.required],
      email: ['', Validators.required],
      userType: ['', Validators.required],
      mobileNo: ['', Validators.required],
      createdBy: ['', Validators.required],
      iagree : [false,Validators.required]
    });

  }

  buttonTriggered(evt: any) {
    if (evt == "submit") {
      console.log(this.form.controls);
      this._snackBar.open("Registration is completed successfully..! You will received an official mail after approval of your registration request.", "", {
        duration: 5000,
        panelClass: ['success-snackbar']
      });
    }
    else if (evt == "cancel") {

    }
  }

}
