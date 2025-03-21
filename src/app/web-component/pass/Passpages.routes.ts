import { Routes } from '@angular/router';
import { PassAllocationComponent } from './pass-allocation/pass-allocation.component';
import { LinkDriverComponent } from './link-driver/link-driver.component';
import { PassRenewalComponent } from './pass-renewal/pass-renewal.component';
import { DeactivationPassComponent } from './deactivation-pass/deactivation-pass.component';

export const PassPagesRoutes: Routes = [
  {
    path: 'pass-activation',
    component: PassAllocationComponent,
    data: {
      title: 'Pass Activation and Deactivation',
      urls: [
        { title: 'Pass Activation and Deactivation', url: '/pass-activation' },
        { title: 'Pass Activation and Deactivation' },
      ],
    },
  },
  {
    path: 'link-driver',
    component: LinkDriverComponent,
    data: {
      title: 'Link Driver',
      urls: [
        { title: 'Link Driver', url: '/link-driver' },
        { title: 'Link Driver' },
      ],
    },
  },
  {
    path: 'pass-renewal',
    component: PassRenewalComponent,
    data: {
      title: 'Pass Renewal',
      urls: [
        { title: 'Pass Renewal', url: '/pass-renewal' },
        { title: 'Pass Renewal' },
      ],
    },
  },
  {
    path: 'pass-deactivation',
    component: DeactivationPassComponent,
    data: {
      title: 'Pass Deactivation',
      urls: [
        { title: 'Pass Deactivation', url: '/pass-deactivation' },
        { title: 'Pass Deactivation' },
      ],
    },
  },
];
