import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-toggle',
  imports: [MaterialModule,CommonModule],
  templateUrl: './cm-toggle.component.html',
  styleUrl: './cm-toggle.component.scss'
})
export class CmToggleComponent {
  @Input() settings:any;
}
