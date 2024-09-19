import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.scss',
})
export class EditarPerfilComponent {
  constructor(private formBuilder: FormBuilder) {}
  emailReadonly: boolean = true;
  nomeReadonly: boolean = true;
  readonly dialog = inject(MatDialog);
  nome: string = 'Admin';
  formEditarPerfil: FormGroup = this.formBuilder.group({
    nome: [''],
    email: ['', Validators.email],
  });
  editarNome() {
    this.nomeReadonly = !this.nomeReadonly;
  }
  editarEmail() {
    this.emailReadonly = !this.emailReadonly;
  }
  salvarEdicao() {
    console.log('ola');
    this.nome = this.formEditarPerfil.value.nome;
    console.log(this.nome);

    this.dialog.closeAll();
  }
}
