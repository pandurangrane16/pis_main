import { Routes } from '@angular/router';
import { MenumasterComponent } from './menumaster/menumaster.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

export const AdminPagesRoutes: Routes = [
  {
    path: 'menu-management',
    component: MenumasterComponent,
    data: {
      title: 'Menu Management',
      urls: [
        { title: 'Menu Management', url: '/menu-management' },
        { title: 'Menu Management' },
      ],
    },
  },
  {
    path: 'client-details',
    component: ClientDetailsComponent,
    data: {
      title: 'Client Details',
      urls: [
        { title: 'Client Details', url: '/client-details' },
        { title: 'Client Details' },
      ],
    },
  },
];
