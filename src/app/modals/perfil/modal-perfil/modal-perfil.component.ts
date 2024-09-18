import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { SairComponent } from '../sair/sair.component';
@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrl: './modal-perfil.component.scss',
})
export class ModalPerfilComponent {
  readonly dialog = inject(MatDialog);
  openEditar() {
    this.dialog.open(EditarPerfilComponent);
  }
  openSair() {
    this.dialog.open(SairComponent);
  }
}
