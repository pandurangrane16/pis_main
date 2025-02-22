import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { VehicleManagementComponent } from './vehicle/vehicle-management/vehicle-management.component';
import { ListAppuserComponent } from './appuser/list-appuser/list-appuser.component';
import { CrewListComponent } from './crews/crew-list/crew-list.component';
import { ForeignerListComponent } from './foreigner/foreigner-list/foreigner-list.component';
import { BlacklistedUserComponent } from './blacklisted-user/blacklisted-user.component';
import { RequestRfidComponent } from '../rfid/request-rfid/request-rfid.component';
import { PaymentControlComponent } from '../common/payment-control/payment-control.component';
import { RfidRefundComponent } from '../rfid/rfid-refund/rfid-refund.component';

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
  },
  
  {
    path: 'appuser-details',
    component: ListAppuserComponent,
    data: {
      title: 'App User Details',
      urls: [
        { title: 'App User Details', url: '/appuser-details' },
        { title: 'App User Details' },
      ],
    },
  },
  
  {
    path: 'crew-details',
    component: CrewListComponent,
    data: {
      title: 'Crew Details',
      urls: [
        { title: 'Crew Details', url: '/crew-details' },
        { title: 'Crew Details' },
      ],
    },
  },

  {
    path: 'foreigner-details',
    component: ForeignerListComponent,
    data: {
      title: 'Foreigner Details',
      urls: [
        { title: 'Foreigner Details', url: '/foreigner-details' },
        { title: 'Foreigner Details' },
      ],
    },
  },

  {
    path: 'blacklisted-user',
    component: BlacklistedUserComponent,
    data: {
      title: 'Blacklisted User',
      urls: [
        { title: 'Blacklisted User', url: '/blacklisted-user' },
        { title: 'Blacklisted User' },
      ],
    },
  },

  {
    path: 'request-rfid',
    component: RequestRfidComponent,
    data: {
      title: 'Request RFID',
      urls: [
        { title: 'Request RFID', url: '/request-rfid' },
        { title: 'Request RFID' },
      ],
    },
  },

  {
    path: 'payment',
    component: PaymentControlComponent,
    data: {
      title: 'Payment Control',
      urls: [
        { title: 'Payment Control', url: '/payment' },
        { title: 'Payment Control' },
      ],
    },
  },

  {
    path: 'rfid-refund',
    component: RfidRefundComponent,
    data: {
      title: 'RFID Refund Request',
      urls: [
        { title: 'RFID Refund Request', url: '/rfid-refund' },
        { title: 'RFID Refund Request' },
      ],
    },
  },
];
