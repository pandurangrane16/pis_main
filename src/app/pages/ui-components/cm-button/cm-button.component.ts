import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-button',
  imports: [MaterialModule, CommonModule],
  templateUrl: './cm-button.component.html',
  styleUrl: './cm-button.component.scss'
})
export class CmButtonComponent {
  @Input() color: any;
  @Input() class: any;
  @Input() type: any;
  @Input() return: any;

  @Output() buttonClicked = new EventEmitter<string>();

  onButtonClicked() {
    if (this.return == "submit")
      this.buttonClicked.emit('submit');
    else if (this.return == "cancel")
      this.buttonClicked.emit('cancel');
  }
}
