import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';

@Component({
  selector: 'app-cm-modal',
  imports: [MaterialModule,CmInputComponent],
  templateUrl: './cm-modal.component.html',
  styleUrl: './cm-modal.component.scss'
})
export class CmModalComponent implements OnInit{
  ngOnInit(): void {
    this.inputJson = {
      labelClass : "f-w-600 m-b-8 d-block",
      labelHeader : "Company Name",
      placeholder : "Company Name",
      appearance : "outline",
      color : "primary",
      formFieldClass: "w-100"
    }
  }
  @Input() _controls:any;
  inputJson :any;

  
}
