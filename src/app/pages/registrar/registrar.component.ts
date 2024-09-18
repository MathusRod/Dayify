import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {
  inputShowPassword: string = "password"
  inputShowConfirmPassword: string = "password"
  formRegistrar: FormGroup;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router){}
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(){
    this.formRegistrar = this.formBuilder.group({
      nomeUsuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]]
    });
  }

  mostrarSenha(id:number){
    if(id == 1){
      if(this.inputShowPassword=="password"){
        this.inputShowPassword = "text"
      } else this.inputShowPassword = "password"
    } else {
      if(this.inputShowConfirmPassword == "password"){
        this.inputShowConfirmPassword = "text"
      } else {
        this.inputShowConfirmPassword = "password"
      }
    }
  }

  
  registrar() {
    if (this.formRegistrar.valid) {
      if (this.formRegistrar.get('senha')?.value === this.formRegistrar.get('confirmarSenha')?.value) {
        const usuario = {
          nomeUsuario: this.formRegistrar.get('nomeUsuario')?.value,
          email: this.formRegistrar.get('email')?.value,
          senha: this.formRegistrar.get('senha')?.value // Em um sistema real, use uma técnica de hash para salvar a senha
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']) // Redireciona para a página de login
      } else {
        alert('As senhas não coincidem');
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente');
    }
  }
}
