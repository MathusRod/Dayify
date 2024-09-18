import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.scss'
})
export class EditarPerfilComponent {
  emailReadonly: boolean = true;
  nomeReadonly: boolean = true;
  readonly dialog = inject(MatDialog);
  editarNome(){
    this.nomeReadonly = !this.nomeReadonly
  }
  editarEmail(){
    this.emailReadonly = !this.emailReadonly
  }
  salvarEdicao(){
    this.dialog.closeAll()
  }
}
