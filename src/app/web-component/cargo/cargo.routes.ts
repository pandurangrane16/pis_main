import { Routes } from '@angular/router';
import { CargoListComponent } from './cargo-list/cargo-list.component';

export const CargoRoutesModule : Routes = [
  {
    path: 'cargo-list',
    component: CargoListComponent,
    data: {
      title: 'Cargo List',
      urls: [
        { title: 'Cargo List', url: '/cargo-list' },
        { title: 'Cargo List' },
      ],
    },
  },
];
