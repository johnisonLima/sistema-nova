import { Routes } from '@angular/router';

import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { UsuarioFormComponent } from './containers/usuario-form/usuario-form.component';
import { usuarioResolver } from './guards/usuario.resolver';

export const usuariosRoutes: Routes = [
  {
    path: 'novo',
    component: UsuarioFormComponent,
    resolve: {
      usuario: usuarioResolver
    }
  },
  {
    path: 'edit/:id',
    component: UsuarioFormComponent,
    resolve: {
      usuario: usuarioResolver
    }
  },
  {
    path: '',
    component: UsuariosComponent
  },
]
