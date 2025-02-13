import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';

@Component({
  selector: 'app-cm-modal',
  imports: [MaterialModule, CmInputComponent],
  standalone:true,
  templateUrl: './cm-modal.component.html',
  styleUrl: './cm-modal.component.scss'
})
export class CmModalComponent implements OnInit {
  @Input() data: any;
  ngOnInit() {
    console.log(this.data);
  }
  @Input() _controls: any;
  inputJson: any;


}
