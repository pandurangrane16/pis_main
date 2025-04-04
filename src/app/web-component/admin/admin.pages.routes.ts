import { Routes } from '@angular/router';
import { MenumasterComponent } from './menumaster/menumaster.component';

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
];
