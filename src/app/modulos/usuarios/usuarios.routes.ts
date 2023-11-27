import { Routes } from '@angular/router';

import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuarioFormComponent } from './containers/usuario-form/usuario-form.component';

export const usuariosRoutes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'novo',
    component: UsuarioFormComponent
  },
];
