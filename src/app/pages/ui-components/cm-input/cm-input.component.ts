import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cm-input',
  imports: [MatFormFieldModule,
    MatInputModule,MaterialModule],
    standalone:true,
  templateUrl: './cm-input.component.html',
  styleUrl: './cm-input.component.scss',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CmInputComponent),
    multi: true
  }]
})
export class CmInputComponent implements OnInit {
  @Input() _inputData:any;
  value: string = '';
  @Input() formControl: FormControl; 
  ngOnInit(): void {
    
  }
 // Function to call when the value changes
 onChange: any = () => {};

 // Function to call when the input is touched
 onTouched: any = () => {};

 // Write value from the form model into the view
 writeValue(value: string): void {
   this.value = value || '';
 }

 // Register a callback function to notify Angular when the value changes
 registerOnChange(fn: any): void {
   this.onChange = fn;
 }

 // Register a callback function to notify Angular when the input is touched
 registerOnTouched(fn: any): void {
   this.onTouched = fn;
 }

 // Handle input changes
 onInput(event: Event): void {
   const value = (event.target as HTMLInputElement).value;
   this.value = value;
   this.onChange(value); // Notify Angular of the change
 }

 // Handle blur event
 onBlur(): void {
   this.onTouched(); // Notify Angular that the input was touched
 }
}
