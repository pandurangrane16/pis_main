import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from "../../../pages/ui-components/cm-input/cm-input.component";
import { LoginForm } from 'src/assets/forms_control/common/loginForm';
import { AppSettings } from 'src/app/config';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
   imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, CmInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
[x: string]: any;

appSettings: AppSettings;
constructor(private router: Router, private toast : ToastrService) {}

  loginForm =new LoginForm();
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.router.navigate(['']);
  }
  SignIn(){
    let enteredUsername = this.form.controls["username"].value;
    let enteredPassword = this.form.controls["password"].value;
    let superUserName = this.appSettings.superUserName;
    let superPassword = this.appSettings.superUserPass;

    if(enteredUsername?.toLocaleLowerCase() != superUserName.toLocaleLowerCase()) {
      this.toast.error("Invalid Username entered");
    }
    else if(enteredPassword != superPassword) {
      this.toast.error("Invalid Password entered");
    }
    else {
      //Login Routes
    }
  }
}
