import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { CmSelect2Component } from 'src/app/pages/ui-components/cm-select2/cm-select2.component';
import { foreignerMng } from 'src/assets/forms_control/foreignerMng';
import { MY_FORMATS } from '../../update-company/update-company.component';

@Component({
  selector: 'app-foreigner-mng',
  imports: [MaterialModule,CmInputComponent,CmSelect2Component,CommonModule],
  templateUrl: './foreigner-mng.component.html',
  styleUrl: './foreigner-mng.component.scss',
  providers:[{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
          {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}]
})
export class ForeignerMngComponent {
selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  progressInfos: any[] = [];
  message: string[] = [];
  headerName:string;

  previews: string[] = [];
  imageInfos?: Observable<any>;
  foreignerMngs=new foreignerMng();
  date = new FormControl(moment());
  constructor(private modal:Dialog,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(): void {
    if(this.data.mode == "add") 
      this.headerName = "Add Foreigner Details";
    else if(this.data.mode == "upd")
      this.headerName = "Update Foreigner Details";
    else if(this.data.mode == "del")
      this.headerName = "Remove Foreigner Details";
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }
  upload(idx: number, file: File): void {
   
  }

  uploadFiles(): void {
    
  }
  closeModal() {
    this.modal.closeAll();
  }
}
