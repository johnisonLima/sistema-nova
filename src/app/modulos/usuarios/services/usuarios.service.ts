import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../model/usuario';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = '/assets/testes/usuarios.json'

  constructor(
    private http: HttpClient
  ) { }

  listAll(){
    return this.http.get<Usuario[]>(this.API)
    .pipe(
      first(),
      // delay(1500),
      /*
      Saber o que o seridor está rescebendo pelo console
      tap(usuarios => console.log(usuarios))
      */
    )
  }

  loadById(id: string) {
    return this.http.get<Usuario>(`${this.API}/id`)
  }
}
