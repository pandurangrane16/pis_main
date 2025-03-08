import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AsyncPipe, CommonModule} from '@angular/common';
import { map, Observable, startWith } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-select2',
  imports: [MaterialModule,AsyncPipe,CommonModule],
  templateUrl: './cm-select2.component.html',
  styleUrl: './cm-select2.component.scss'
})
export class CmSelect2Component {
  myControl = new FormControl<string | any>('');
  selectedItem :any;
  @Input() settings:any;
  stateCtrl = new FormControl('');
    @Input() formGroup : FormGroup;
    @Input() controlName: any; 
  filteredOptions: Observable<any[]>;

  constructor(){
    this.filteredOptions = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.settings.options.slice())),
    );
  }
  private _filterStates(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.settings.options.filter((state:any) => state.name.toLowerCase().includes(filterValue));
  }
  ngOnInit(): void {
    console.log(this.settings);
  }
  displayFn(option: any): string {
    return option && option.name ? option.name : '';
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.settings.options.filter((option:any) => option.name.toLowerCase().includes(filterValue));
  }
}
