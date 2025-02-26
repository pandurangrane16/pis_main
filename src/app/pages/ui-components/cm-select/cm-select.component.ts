import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-select',
  imports: [MaterialModule],
  templateUrl: './cm-select.component.html',
  styleUrl: './cm-select.component.scss'
})
export class CmSelectComponent implements OnInit {
  
  selectedVal:any;
  @Input() settings:any;
  @Input() labelHeader:string;
  ngOnInit(): void {
    console.log(this.settings);
  }
}
