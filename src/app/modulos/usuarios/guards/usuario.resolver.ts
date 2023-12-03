// import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
// import { of } from 'rxjs';

// import { Usuario } from '../model/usuario';
// import { UsuariosService } from './../services/usuarios.service';

// export function usuarioResolver(service: UsuariosService): ResolveFn<Usuario> {

//   return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//     console.log('Não está entrando aqui')
//     if (route.params && route.params['id']) {
//       return service.loadById(route.params['id'])
//     }

//     return of({ _id: '', nome: '', sobrenome: '', funcao: '', status: '', email: '', telefone: '', senha: '', repetirSenha: ''})
//   }
// }

import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { of } from 'rxjs';

import { Usuario } from '../model/usuario';
import { UsuariosService } from './../services/usuarios.service';

export const usuarioResolver: ResolveFn<Usuario> = (route: ActivatedRouteSnapshot, state) => {
  if (route.params && route.params['id']){
    return inject(UsuariosService).loadById(route.params['id'])
  }

  return of({ _id: '', nome: '', sobrenome: '', funcao: '', status: '', email: '', telefone: '', senha: '', repetirSenha: ''})
}
