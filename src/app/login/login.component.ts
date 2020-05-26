import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  constructor(private login: LoginService, private router: Router) { }
  tryLogin() {
    this.login.logar(this.usuario);
  }
  ngOnInit() {
    if (this.login.isLogged()) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
