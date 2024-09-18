import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarEventoComponent } from '../../modals/evento/criar-evento/criar-evento.component';
import { DetalhesEventoComponent } from '../../modals/evento/detalhes-evento/detalhes-evento.component';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  modalPefilOpen: boolean = false;
  modalNotificacaoOpen: boolean = false;
  constructor(
    private usuarioService: UsuarioService,
    private _eventos: EventosService
  ) {}
  deslogar() {
    this.usuarioService.deslogar(false);
  }
  chamarModalPerfil() {
    this.modalPefilOpen = !this.modalPefilOpen;
    if (this.modalNotificacaoOpen) {
      this.modalNotificacaoOpen = !this.modalNotificacaoOpen;
    }
  }
  chamarModalNotificacao() {
    this.modalNotificacaoOpen = !this.modalNotificacaoOpen;
    if (this.modalPefilOpen) {
      this.modalPefilOpen = !this.modalPefilOpen;
    }
  }
  salvarOsEventos = this._eventos.arrayDeEventos;
  readonly dialog = inject(MatDialog);

  openCriarEvento() {
    this.dialog.open(CriarEventoComponent);
  }
  openDetalhes(id: number) {
    this._eventos.id = id;
    this.dialog.open(DetalhesEventoComponent);
  }
}
