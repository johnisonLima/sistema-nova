import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})

export class UsuarioFormComponent {

  form =  this.formBuilder.group({
    nome: [''],
    sobrenome: [''],
    funcao: [''],
    status: [''],
    email: [''],
    telefone: [''],
    senha: [''],
    repetirSenha: ['']
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private service: UsuariosService
    )
  {}

  // form = this.formBuilder.group({
  //   nome: [''],
  //   sobrenome: [''],
  //   funcao: [''],
  //   status: [''],
  //   email: [''],
  //   telefone: [''],
  //   senha: [''],
  //   repetirSenha: ['']
  // })

  // camposComIcones = [
  //   { formControlName: 'nome'},
  //   { formControlName: 'sobrenome' },
  //   { formControlName: 'funcao' },
  //   { formControlName: 'status' },
  //   { formControlName: 'email' },
  //   { formControlName: 'telefone' },
  //   { formControlName: 'senha' },
  //   { formControlName: 'repetirSenha' }
  // ]

  ngOnInit(): void {
    const usuario: Usuario = this.route.snapshot.data['usuario']

    this.form.patchValue({
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      funcao: usuario.funcao,
      status: usuario.status,
      email: usuario.email,
      telefone: usuario.telefone,
      senha: usuario.senha,
      repetirSenha: usuario.repetirSenha
    })
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log(result))
  }

  onCancel(){
    this.location.back()
  }

  private onSuccess() {
    this._snackBar.open('Usuário salvo', '')
    this.location.back()
  }

  private onError() {
    this._snackBar.open('Erro ao salvar usuário', '')
  }
}
