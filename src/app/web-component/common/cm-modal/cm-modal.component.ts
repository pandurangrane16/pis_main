import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';

@Component({
  selector: 'app-cm-modal',
  imports: [MaterialModule,CmInputComponent],
  standalone:true,
  templateUrl: './cm-modal.component.html',
  styleUrl: './cm-modal.component.scss'
})
export class CmModalComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  constructor(private _modal:Dialog,@Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit() {
    console.log(this.data);
  }
  @Input() _controls: any;
  inputJson: any;

  closeModal(){
    this._modal.closeAll();
  }
  uploadDoc(){
    this._snackBar.open("Document Uploaded Successfully...!","", {
      duration: 3000,
      panelClass: ['green-snackbar'],
     });

     this.closeModal();
  }
}
