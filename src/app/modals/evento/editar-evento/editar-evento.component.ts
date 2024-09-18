import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventosService } from '../../../services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.scss'
})
export class EditarEventoComponent {
  readonly dialog = inject(MatDialog)
  salvarEvento = this._eventos.arrayDeEventos
  id = this._eventos.id
  constructor(private _eventos: EventosService, private formBuilder: FormBuilder){

  }
  formEditarEvento: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    data: ['', Validators.required],
    horario: ['', Validators.required],
    descricao: ['']
  })
  close(){
    this.dialog.closeAll()
  }
  salvar(){
    // let test = this._eventos.arrayDeEventos[this.id].data
    // console.log(test)
    // console.log(this.salvarEvento[this.id].data)
    this.salvarEvento[this.id].nome = this.formEditarEvento.value.nome

    console.log(this.formEditarEvento.value.data)
    console.log(this.salvarEvento[this.id].data)

    this.salvarEvento[this.id].data = this.formEditarEvento.value.data
    console.log(this.salvarEvento[this.id].data)

    this.salvarEvento[this.id].horario = this.formEditarEvento.value.horario
    this.salvarEvento[this.id].descricao = this.formEditarEvento.value.descricao
    this.close()
  }
}
