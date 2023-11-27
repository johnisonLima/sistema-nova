import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { Usuarios } from './madels/usuarios';
import { UsuariosService } from './services/usuarios.service';
import { Observable, catchError, of } from 'rxjs';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  usuarios$: Observable<Usuarios[]>
  displayedColumns = ['nome', 'funcao', 'status', 'email', 'telefone', 'acoes']

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    this.usuarios$ = this.usuariosService.listAll()
    .pipe(
      catchError(
        error => {
          console.log()
          return of([])
        }
      )
    )
  }

  onAdd(){
    console.log("onadd")
    this.router.navigate(['novo'], { relativeTo: this.route })
  }

}
