import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { IUsuario } from '../../interfaces/IUsuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  numero: number;
  formLogin: FormGroup;
  inputPasswordType: string = "password"
  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService){
              }
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }
  logar(){
    if(this.formLogin.invalid) return;
    var usuario = this.formLogin.getRawValue() as IUsuario;
    this.usuarioService.logar(usuario).subscribe((response) => {
        if(!response.sucesso){
          alert('Email ou senha incorretos')

        }
    })
  }
  
  mostrarSenha(){
    this.inputPasswordType = this.inputPasswordType === 'password' ? 'text' : 'password'
  }
}
