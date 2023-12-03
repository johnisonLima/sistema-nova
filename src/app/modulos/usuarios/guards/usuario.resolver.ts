import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { Usuario } from '../model/usuario';
import { UsuariosService } from './../services/usuarios.service';

export function usuarioResolver(service: UsuariosService): ResolveFn<Usuario> {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (route.params && route.params['id']) {
      return service.loadById(route.params['id'])
    }

    return of({ _id: '', nome: '', sobrenome: '', funcao: '', status: '', email: '', telefone: '', senha: '', repetirSenha: ''})
  }
}
