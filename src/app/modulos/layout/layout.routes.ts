import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.routes').then(m => m.usuariosRoutes)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];
