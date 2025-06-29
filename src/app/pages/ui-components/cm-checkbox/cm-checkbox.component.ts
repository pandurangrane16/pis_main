import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-checkbox',
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cm-checkbox.component.html',
  styleUrl: './cm-checkbox.component.scss'
})
export class CmCheckboxComponent implements OnInit {
  cdRef=Inject(ChangeDetectorRef);
  @Input() _inputData: any;
  value: string = '';
  type: string = "text";
  @Input() formGroup: FormGroup;
  @Input() controlName: any;

  ngOnInit(): void {
   console.log(this._inputData);
  }
}
