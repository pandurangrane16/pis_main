import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-input',
  imports: [MaterialModule],
  templateUrl: './cm-input.component.html',
  styleUrl: './cm-input.component.scss'
})
export class CmInputComponent {
  @Input() _inputData:any;
}
