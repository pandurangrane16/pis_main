import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from "../../../pages/ui-components/cm-input/cm-input.component";
import { LoginForm } from 'src/assets/forms_control/common/loginForm';
import { AppSettings } from 'src/app/config';
import {provideToastr,ToastrService} from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
   imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[provideAnimations()]
})
export class LoginComponent {
   loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      rememberMe: [false]
    });
  }
}
