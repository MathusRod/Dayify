import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss',
})
export class RegistrarComponent {
  inputShowPassword: string = 'password';
  inputShowConfirmPassword: string = 'password';
  formRegistrar: FormGroup;
  apiUrl = environment.apiUrl + '/api/Auth/Cadastro';
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm() {
    this.formRegistrar = this.formBuilder.group({
      nomeUsuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]],
    });
  }

  mostrarSenha(id: number) {
    if (id == 1) {
      if (this.inputShowPassword == 'password') {
        this.inputShowPassword = 'text';
      } else this.inputShowPassword = 'password';
    } else {
      if (this.inputShowConfirmPassword == 'password') {
        this.inputShowConfirmPassword = 'text';
      } else {
        this.inputShowConfirmPassword = 'password';
      }
    }
  }

  registrar() {
    if (this.formRegistrar.valid) {
      if (
        this.formRegistrar.get('senha')?.value ===
        this.formRegistrar.get('confirmarSenha')?.value
      ) {
        const usuario = {
          nome: this.formRegistrar.get('nomeUsuario')?.value,
          email: this.formRegistrar.get('email')?.value,
          senha: this.formRegistrar.get('senha')?.value,
          confimarSenha: this.formRegistrar.get('confiarmSenha')?.value,
        };

        const headers = { 'Content-Type': 'text/json' }; // Definindo o cabeçalho corretamente

        this.http.post(this.apiUrl, usuario, { headers }).subscribe(
          (response) => {
            alert('Cadastro realizado com sucesso!');
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Erro no cadastro:', error); // Log detalhado do erro
            alert('Erro no cadastro: ' + error.error.message);
          }
        );
      } else {
        alert('As senhas não coincidem');
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente');
    }
  }
  register(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
