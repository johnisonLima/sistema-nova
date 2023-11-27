import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './autenticacao/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(
    private router: Router
  ) { }

  fazerAutenticacao(usuario: User){
    if(usuario.nome === 'admin' && usuario.senha === 'admin'){
      this.usuarioAutenticado = true;
      
      this.router.navigate(['/modulos']);
    }
    else{
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
