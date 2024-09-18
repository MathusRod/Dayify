// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

// import { usuarioNaoAutenticadoGuard } from './usuario-nao-autenticado.guard';

// describe('usuarioNaoAutenticadoGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => usuarioNaoAutenticadoGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate{
    constructor(
      private usuarioService: UsuarioService,
      private router: Router) { }
    canActivate(){
      if (this.usuarioService.logado) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
}