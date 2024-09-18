import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SairComponent } from './modals/perfil/sair/sair.component';
import { EditarPerfilComponent } from './modals/perfil/editar-perfil/editar-perfil.component';
import { ModalPerfilComponent } from './modals/perfil/modal-perfil/modal-perfil.component';
import { CriarEventoComponent } from './modals/evento/criar-evento/criar-evento.component';
import { EditarEventoComponent } from './modals/evento/editar-evento/editar-evento.component';
import { DetalhesEventoComponent } from './modals/evento/detalhes-evento/detalhes-evento.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { DataTransformPipe } from './shared/pipes/data-transform.pipe';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrarComponent,
    SairComponent,
    EditarPerfilComponent,
    ModalPerfilComponent,
    CriarEventoComponent,
    EditarEventoComponent,
    DetalhesEventoComponent,
    RecuperarSenhaComponent,
    DataTransformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CalendarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
