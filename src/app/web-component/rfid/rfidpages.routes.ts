import { Routes } from '@angular/router';
import { RequestRfidComponent } from './request-rfid/request-rfid.component';
import { PaymentControlComponent } from '../common/payment-control/payment-control.component';
import { RfidRefundComponent } from './rfid-refund/rfid-refund.component';
import { RfidRefundDetailsComponent } from './rfid-refund-details/rfid-refund-details.component';
import { ViewRfidComponent } from './view-rfid/view-rfid.component';

export const RfidPagesRoutes: Routes = [
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

  {
    path: 'rfid-refund-details',
    component: RfidRefundDetailsComponent,
    data: {
      title: 'RFID Refund Details',
      urls: [
        { title: 'RFID Refund Details', url: '/rfid-refund-details' },
        { title: 'RFID Refund Details' },
      ],
    },
  },

  {
    path: 'view-rfid',
    component: ViewRfidComponent,
    data: {
      title: 'View RFID',
      urls: [
        { title: 'View RFID', url: '/view-rfid' },
        { title: 'View RFID' },
      ],
    },
  },
];
