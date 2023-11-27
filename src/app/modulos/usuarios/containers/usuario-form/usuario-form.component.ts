import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})

export class UsuarioFormComponent {

  form: FormGroup

  camposComIcones = [
    { formControlName: 'nome', class: 'sfaf' },
    { formControlName: 'sobrenome' },
    { formControlName: 'funcao' },
    { formControlName: 'status' },
    { formControlName: 'email' },
    { formControlName: 'telefone' },
    { formControlName: 'senha' },
    { formControlName: 'repetirSenha' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      funcao: [null],
      status: [null],
      email: [null],
      telefone: [null],
      senha: [null, Validators.required],
      repetirSenha: [null, Validators.required]
    })
  }
}
