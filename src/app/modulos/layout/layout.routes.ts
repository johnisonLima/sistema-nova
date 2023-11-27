import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';

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
        component: UsuariosComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];
