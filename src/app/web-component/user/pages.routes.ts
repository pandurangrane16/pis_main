import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { VehicleManagementComponent } from './vehicle/vehicle-management/vehicle-management.component';

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
  {
    path: 'vehicle-details',
    component: ListVehicleComponent,
    data: {
      title: 'Vehicle Details',
      urls: [
        { title: 'Vehicle Details', url: '/vehicle-details' },
        { title: 'Vehicle Details' },
      ],
    },
  },
  {
    path: 'vehicle-management',
    component: VehicleManagementComponent,
    data: {
      title: 'Vehicle Management',
      urls: [
        { title: 'Vehicle Management', url: '/vehicle-management' },
        { title: 'Vehicle Management' },
      ],
    },
  }
];
