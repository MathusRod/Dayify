import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private _httpClient: HttpClient, private _router: Router) {}

  logar(usuario: IUsuario): Observable<any> {
    /*return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
      tap((resposta) => {
        if(!resposta.sucesso) return;
        localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
        localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));
        this.router.navigate(['']);
      }));*/
    return this.mockUsuarioLogin(usuario).pipe(
      tap((resposta) => {
        if (!resposta.sucesso) return;
        localStorage.setItem(
          'token',
          btoa(JSON.stringify('TokenQueSeriaGeradoPelaAPI'))
        );
        localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
        this._router.navigate(['']);
      })
    );
  }
  private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
    var retornoMock: any = [];
    if (usuario.email === 'dfy@email' && usuario.senha == '12345') {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = 'TokenQueSeriaGeradoPelaAPI';
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }

  deslogar(estado: boolean) {
    if (!estado) {
      localStorage.clear();
      this._router.navigate(['login']);
    }
  }
  get obterUsuarioLogado(): IUsuario | null {
    const usuarioCodificado = localStorage.getItem('usuario');
    if (usuarioCodificado) {
      return JSON.parse(atob(usuarioCodificado));
    }
    return null;
  }
  get obterIdUsuarioLogado(): string | null {
    const usuarioCodificado = localStorage.getItem('usuario');
    if (usuarioCodificado) {
      const usuario: IUsuario = JSON.parse(atob(usuarioCodificado));
      return usuario.id;
    }
    return null;
  }

  get obterTokenUsuario(): string | null {
    const tokenCodificado = localStorage.getItem('token');
    if (tokenCodificado) {
      return JSON.parse(atob(tokenCodificado));
    }
    return null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
