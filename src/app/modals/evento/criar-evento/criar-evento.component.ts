
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrl: './criar-evento.component.scss'
})
export class CriarEventoComponent {
  readonly dialog = inject(MatDialog)
  
  constructor(private formBuilder: FormBuilder, private _eventos: EventosService){
    
  }
  eventos: any[];
  formCriarEvento: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    data: ['', Validators.required],
    horario: ['', Validators.required],
    descricao: ['']
  })

  close(){
    this.dialog.closeAll()
  }
  salvar(){
    if(this.formCriarEvento.value){
      console.log(this.formCriarEvento.value)
      this._eventos.salvarEvento(this.formCriarEvento.value)
    }
    this.close()
  }
}
