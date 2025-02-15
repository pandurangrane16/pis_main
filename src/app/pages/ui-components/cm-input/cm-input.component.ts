import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-input',
  imports: [MatFormFieldModule,
    MatInputModule,],
    standalone:true,
  templateUrl: './cm-input.component.html',
  styleUrl: './cm-input.component.scss'
})
export class CmInputComponent implements OnInit {
  @Input() _inputData:any;
  ngOnInit(): void {
    console.log(this._inputData);
  }

}
