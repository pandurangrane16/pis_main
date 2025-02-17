import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { CmInputComponent } from 'src/app/pages/ui-components/cm-input/cm-input.component';
import { appUserMng } from 'src/assets/forms_control/appuserMng';
import { MY_FORMATS } from '../../update-company/update-company.component';
import { CmSelect2Component } from 'src/app/pages/ui-components/cm-select2/cm-select2.component';

@Component({
  selector: 'app-appuser-management',
  imports: [MaterialModule,CommonModule,CmInputComponent,CmSelect2Component],
  templateUrl: './appuser-management.component.html',
  styleUrl: './appuser-management.component.scss',
  providers:[{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
      {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}]
})
export class AppuserManagementComponent implements OnInit {
  
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  progressInfos: any[] = [];
  message: string[] = [];
  headerName:string;

  previews: string[] = [];
  imageInfos?: Observable<any>;
  appUserMng=new appUserMng();
  date = new FormControl(moment());
  constructor(private modal:Dialog,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(): void {
    if(this.data.mode == "add") 
      this.headerName = "Add App User Details";
    else if(this.data.mode == "upd")
      this.headerName = "Update App User Details";
    else if(this.data.mode == "del")
      this.headerName = "Remove App User Details";
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
