import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CmPaginationComponent } from '../cm-pagination/cm-pagination.component';

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/product-1.png',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 180,
    priority: 'confirmed',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/product-2.png',
    uname: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    budget: 90,
    priority: 'cancelled',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/product-3.png',
    uname: 'PlayStation 5 DualSense Wireless Controller',
    budget: 120,
    priority: 'rejected',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/product-4.png',
    uname: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
    budget: 160,
    priority: 'confirmed',
  },
];

@Component({
  selector: 'app-cm-table',
  imports: [ MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CmPaginationComponent],
  templateUrl: './cm-table.component.html',
  styleUrl: './cm-table.component.scss'
})
export class CmTableComponent implements OnInit {
listOfData: any;
  tooltip: string = "";
  searchText: string = "";
  @Input() _headerName:string = "";
  @Input() pagination:boolean =true;
  @Input() isSearch: boolean = false;
  @Output() pager = new EventEmitter<number>();
  @Output() searchWithId = new EventEmitter<any>();
  @Output() search = new EventEmitter<string>();
  @Output() recordPerPage = new EventEmitter<number>();
  @Input() headArr: any[] = [];
  @Input() link!: string;
  @Input() isSearchBox: boolean = true;
  @Input() fieldName!: string;
  @Input() gridArr: any[] = [];
  @Input() totalRecords!: number;
  @Input() perPage: number = 10;
  @Input() totalPages: number = 1;
  @Input() collectionSize: number = 1;
  @Input() btnArray: any[] = [];
  filteredData: any = [];
  activePage: number = 0;
  @Output() btnAction = new EventEmitter<any>();
  @Output() checked = new EventEmitter<any>();
  @Output() notChecked = new EventEmitter<any>();
menu1: MatMenuPanel<any>|null;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.headArr = this.headArr.sort(x=>x.position);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isSearch) {
      this.searchText = "";
    }
  }
  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber
  }
  Search() {
    if (this.searchText.trim().length > 2) {
      this.search.emit(this.searchText);
    } else if (this.searchText.trim() == "") {
      this.search.emit(this.searchText);
    }
  }
  mouseEnter(msg: string) {
    this.tooltip = msg;
  }
  pageChange(pager: number) {
    this.pager.emit(pager);
  }

  onPageChange(pageNo: number) {
    this.pageChange(pageNo);
  }
  onPageRecordsChange(pageNo: number) {
    this.recordPerPage.emit(pageNo);
  }

  ShowForm(item: any) {
    if (this.btnArray.length == 0)
      this.searchWithId.emit(item);
    //this.router.navigate([this.link]);
  }
  GoToBtnAction(action: any, data: any) {
    let _sendData = { "action": action.action, "data": data };
    this.btnAction.emit(_sendData);
  }
  Checked(eve: any, data: any) {
    if (eve.target.checked == true)
      this.checked.emit(data);
    else
      this.notChecked.emit(data);
  }
}
