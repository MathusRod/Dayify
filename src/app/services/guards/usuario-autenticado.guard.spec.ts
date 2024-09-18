// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

// import { usuarioAutenticadoGuard } from './usuario-autenticado.guard';

// describe('usuarioAutenticadoGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => usuarioAutenticadoGuard(...guardParameters));

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
export class UsuarioAutenticadoGuard implements CanActivate{
    constructor(
      private usuarioService: UsuarioService,
      private router: Router) { }
    canActivate(){
      if (this.usuarioService.logado) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }
}