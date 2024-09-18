import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarEventoComponent } from '../editar-evento/editar-evento.component';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrl: './detalhes-evento.component.scss'
})
export class DetalhesEventoComponent {
  readonly dialog = inject(MatDialog)

  constructor(private _eventos: EventosService){}

  close(){
    this.dialog.closeAll()
  }
  openEditarEvento(){
    this.close()
    this.dialog.open(EditarEventoComponent)
  }
  salvarOsEventos = this._eventos.arrayDeEventos;
  id = this._eventos.id
}
