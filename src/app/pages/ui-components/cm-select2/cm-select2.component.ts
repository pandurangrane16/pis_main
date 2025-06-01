import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
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
  value: string = '';
  @Input() settings:any;
  stateCtrl = new FormControl('');
    @Input() formGroup : FormGroup;
    selectedValue: string;
    @Input() controlName: any; 
    @Output() returnObject= new EventEmitter<any>();
  filteredOptions: Observable<any[]>;

  constructor(private cdRef: ChangeDetectorRef){
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
    if (!this.settings || !this.settings.options) {
      console.error('Settings or options not provided');
      return;
    }
    this.filteredOptions = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (typeof state === 'string' ? this._filterStates(state) : this.settings.options.slice())),
    );
  }
  displayFn(option: any): string {
    return option && option.name ? option.name : '';
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.settings.options.filter((option:any) => option.name.toLowerCase().includes(filterValue));
  }

  ChangeSelection(event: any) {
    this.returnObject.emit(event);
  }

  displayWith(state: any): string {
    return state ? state.name : '';  // Ensure it displays the 'name' property
  }

  // Function to call when the value changes
 onChange: any = () => {};

 // Function to call when the input is touched
 onTouched: any = () => {};

 // Write value from the form model into the view
 writeValue(value: string): void {
   this.value = value || '';
 }


 toggleDisable() {
  this.settings.isDisabled = !this.settings.isDisabled;
  this.cdRef.detectChanges();  // Manually trigger change detection if necessary
}
}
