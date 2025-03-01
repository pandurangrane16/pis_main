import { Routes } from '@angular/router';
import { PassAllocationComponent } from './pass-allocation/pass-allocation.component';

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
];
