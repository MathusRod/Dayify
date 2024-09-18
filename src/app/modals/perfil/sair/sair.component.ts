import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrl: './sair.component.scss'
})
export class SairComponent {
  readonly dialog = inject(MatDialog);
  constructor(private usuarioService: UsuarioService){}
  logout(){
    this.usuarioService.deslogar(false)
    this.dialog.closeAll()
  }
  cancelar(){
    this.dialog.closeAll()
  }
}
