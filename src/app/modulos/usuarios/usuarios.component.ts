import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { Usuarios } from './madels/usuarios';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, MatCardModule, MatToolbarModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  usuarios:Usuarios[] = [
    {_id: '1', nome: 'Josévaldo', sobrenome: 'Pereira Silva', funcao: 'Administrador', status: 'ativo', email: 'Jose@email.com', telefone: '7798845-7896'},
    {_id: '2', nome: 'Ana', sobrenome: 'Ferreira', funcao: 'Vendedor', status: 'ativo', email: 'Ana@email.com', telefone: '7798765-1234'},
    {_id: '3', nome: 'Carlos', sobrenome: 'Santos', funcao: 'Técnico', status: 'ativo', email: 'Carlos@email.com', telefone: '7798901-5678'},
    {_id: '4', nome: 'Mariana', sobrenome: 'Oliveira', funcao: 'Atendente', status: 'inativo', email: 'Mariana@email.com', telefone: '7798123-4567'},
    {_id: '5', nome: 'Ricardo', sobrenome: 'Lima', funcao: 'Instalador', status: 'ativo', email: 'Ricardo@email.com', telefone: '7798345-6789'},
    {_id: '6', nome: 'Cristina', sobrenome: 'Almeida', funcao: 'Designer', status: 'ativo', email: 'Cristina@email.com', telefone: '7798567-8901'},
    {_id: '7', nome: 'Fernando', sobrenome: 'Costa', funcao: 'Gerente', status: 'ativo', email: 'Fernando@email.com', telefone: '7798789-0123'},
    {_id: '8', nome: 'Patrícia', sobrenome: 'Souza', funcao: 'Financeiro', status: 'inativo', email: 'Patricia@email.com', telefone: '7798901-2345'},
    {_id: '9', nome: 'Lucas', sobrenome: 'Martins', funcao: 'Assistente', status: 'ativo', email: 'Lucas@email.com', telefone: '7798123-4567'},
    {_id: '10', nome: 'Aline', sobrenome: 'Silva', funcao: 'Operacional', status: 'ativo', email: 'Aline@email.com', telefone: '7798345-6789'}
  ]
  displayedColumns = ['nome', 'sobrenome', 'funcao', 'status', 'email', 'telefone']


}
