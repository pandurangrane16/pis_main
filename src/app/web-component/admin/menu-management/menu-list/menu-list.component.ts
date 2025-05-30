import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CmTableComponent } from 'src/app/pages/ui-components/cm-table/cm-table.component';
import { AppTablesComponent } from "../../../../pages/ui-components/tables/tables.component";
import { MenumasterComponent } from '../../menumaster/menumaster.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-list',
  imports: [MaterialModule, AppTablesComponent],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  totalPages: number = 10;
  pager: number = 1;
  totalRecords: number = 1000;
  recordPerPage: number = 10;
  _vehicleData: any[] = [];
  displayedColumnsComp = [
    { "Head": "Menu ID", "FieldName": "id", "type": "number" },
    { "Head": "Menu Name", "FieldName": "menuName", "type": "string" },
    { "Head": "Is Active", "FieldName": "isActive", "type": "string" },
    { "Head": "Actions", "FieldName": "actions", "type": "button" }
  ];
  btnArray: any[] = [{ "name": "View", "icon": "icon-eye", "tip": "Click to View", "action": "view" }, { "name": "Remove", "icon": "icon-trash", "tip": "Click to Remove", "action": "remove" }];

  constructor(private dialog: MatDialog, private fb: FormBuilder) {

  }
  OnTabChange(status: number) {
  }

  //Common Functionalities
  onPager(pager: number) {
  }

  onRecordPageChange(recordPerPage: number) {
  }

  onPageSearch(search: string) {

  }

  SearchWithId(_searchItem: any) {
  }

  AddMenu() {
    const _formData = this.fb.group({
      menuName: ['', Validators.required],
      menuPath: ['', Validators.required],
      parentId: ['', Validators.required],
      displayOrder: ['', Validators.required],
      icon: ['', Validators.required],
      isActive: [true, Validators.required]
    });
    this.dialog.open(MenumasterComponent, {
      data: { _formData }
    });
  }
}
