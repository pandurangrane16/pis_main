import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-select2',
  imports: [MaterialModule],
  templateUrl: './cm-select2.component.html',
  styleUrl: './cm-select2.component.scss'
})
export class CmSelect2Component {
  myControl = new FormControl<string | any>('');
  selectedItem :any;
  @Input() settings:any;
  filteredOptions: Observable<any[]>;

  
  ngOnInit(): void {
    console.log(this.settings);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.settings.options.slice();
      }),
    );
  }
  displayFn(option: any): string {
    return option && option.name ? option.name : '';
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.settings.options.filter((option:any) => option.name.toLowerCase().includes(filterValue));
  }
}
