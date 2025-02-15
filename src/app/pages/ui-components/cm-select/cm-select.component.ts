import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-select',
  imports: [MaterialModule],
  templateUrl: './cm-select.component.html',
  styleUrl: './cm-select.component.scss'
})
export class CmSelectComponent {
  selectedVal:any;
  @Input() settings:any;
}
