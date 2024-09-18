import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard.spec';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard.spec';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '', component: HomeComponent, canActivate: [UsuarioAutenticadoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
