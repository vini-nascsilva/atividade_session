import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { Router } from '@angular/router';


const Token = 'auth';
@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit {
    private usuarioLogado: boolean = false;
    mostrarMenuEmitter = new EventEmitter<boolean>();
    constructor(private router: Router) {

    }
    logar(usuario: UsuarioModel): UsuarioModel {
        usuario.id = 1;
        usuario.nome = "Usuario Teste";
        usuario.token = "0x5710892237DB93A709F1B5D65F928B4EA2458EF22F7F70E4E3CDE4318B940ECC";
        this.usuarioLogado = true;
        this.mostrarMenuEmitter.emit(this.usuarioLogado);
        if (usuario.token) {
            this.setTokenSessionStorage(usuario.token);
            this.router.navigateByUrl('/dashboard');
        }
        return usuario;
    }
    logout() {
        sessionStorage.clear();
        this.setCookie(Token, "");
        this.usuarioLogado = false;
        this.mostrarMenuEmitter.emit(this.usuarioLogado);
    }
    setTokenSessionStorage(token: string): void {
        sessionStorage.setItem(Token, token);
    }
    setTokenCookie(token: string): void {
        this.setCookie(Token, token);
    }

    isLogged() {
        this.usuarioLogado = sessionStorage.getItem(Token) != null;
        return this.usuarioLogado;
    }

    setCookie(name, value) {
        document.cookie = name + "=" + value + "; ";
    }

    getCookie(name) {
        let c;
        let cookies = document.cookie.split(';');
        console.log(cookies);
        for (var i = 0; i < cookies.length; i++) {
            c = cookies[i].split('=');
            if (c[0].trim() == name) {
                return c[1];
            }
        }
        return "";
    }
    ngOnInit() {
        this.mostrarMenuEmitter.emit(this.isLogged());
    }
}