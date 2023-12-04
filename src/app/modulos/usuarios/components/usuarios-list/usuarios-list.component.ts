import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-usuarios-list',
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
    MatIconModule,
  ],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent {

  @Input() usuarios: Usuario[] = []
  readonly displayedColumns = ['nome', 'funcao', 'status', 'email', 'telefone', 'acoes']

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) {}

    onAdd(){
      this.router.navigate(['novo'], { relativeTo: this.route })
    }

    onEdit(usuario: Usuario){
      this.router.navigate(['edit', usuario._id], { relativeTo: this.route })
    }

    onDelete(usuario: Usuario){

    }

}
