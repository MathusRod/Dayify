import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }
  arrayDeEventos: any[] = [];
  salvarEvento(evento: any){
    this.arrayDeEventos.push(evento)
  }
  id: number;
}
