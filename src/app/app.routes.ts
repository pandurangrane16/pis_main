import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full',
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./web-component/user/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./web-component/admin/admin.pages.routes').then((m) => m.AdminPagesRoutes),
      },
      {
        path: 'rfid',
        loadChildren: () =>
          import('./web-component/rfid/rfidpages.routes').then((m) => m.RfidPagesRoutes),
      },
      {
        path: 'pass',
        loadChildren: () =>
          import('./web-component/pass/Passpages.routes').then((m) => m.PassPagesRoutes),
      },
      {
        path: 'cargo',
        loadChildren: () =>
          import('./web-component/cargo/cargo.routes').then((m) => m.CargoRoutesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
