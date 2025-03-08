import { Routes } from '@angular/router';
import { PassAllocationComponent } from './pass-allocation/pass-allocation.component';
import { LinkDriverComponent } from './link-driver/link-driver.component';

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
];
