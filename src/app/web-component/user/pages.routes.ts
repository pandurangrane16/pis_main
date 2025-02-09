import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';

export const PagesRoutes: Routes = [
  {
    path: 'user-dash',
    component: UserDashboardComponent,
    data: {
      title: 'UserDashboard',
      urls: [
        { title: 'Dashboard', url: '/dash-user' },
        { title: 'UserDashboard' },
      ],
    },
  },
  {
    path: 'admin-dash',
    component: AdminDashboardComponent,
    data: {
      title: 'AdminDashboard',
      urls: [
        { title: 'Dashboard', url: '/admin-dash' },
        { title: 'AdminDashboard' },
      ],
    },
  },
  {
    path: 'comp-details',
    component: CompanyDetailsComponent,
    data: {
      title: 'Comany Details',
      urls: [
        { title: 'Comany Details', url: '/comp-details' },
        { title: 'Comany Details' },
      ],
    },
  },
  {
    path: 'comp-update',
    component: UpdateCompanyComponent,
    data: {
      title: 'Update Comany Details',
      urls: [
        { title: 'Comany Details', url: '/comp-update' },
        { title: 'Comany Details' },
      ],
    },
  },
];
