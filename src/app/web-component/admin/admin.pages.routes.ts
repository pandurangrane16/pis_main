import { Routes } from '@angular/router';
import { MenumasterComponent } from './menumaster/menumaster.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { RoleMasterComponent } from './role-master/role-master.component';

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
  {
    path: 'role-master',
    component: RoleMasterComponent,
    data: {
      title: 'Role Management',
      urls: [
        { title: 'Role Management', url: '/role-master' },
        { title: 'Role Management' },
      ],
    },
  },
];
