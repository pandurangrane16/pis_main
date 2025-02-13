import { Component, Input } from '@angular/core';
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
export class CmInputComponent {
  @Input() _inputData:any;
}
