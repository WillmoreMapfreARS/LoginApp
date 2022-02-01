import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ruta:string ="https://identitytoolkit.googleapis.com/v1/accounts:";
  api_key:string ="AIzaSyBkRB1RXOunKlC5zHznICJkkiBqyk4QXWQ";
  // registro: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] 
  //login: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor( private http:HttpClient) { }
public Usuario: UsuarioModel= new UsuarioModel("","","");
  login(u:UsuarioModel)
  {
    const body={
      email:u.email,
      password:u.password,
      returnSecureToken:true
    }
   return this.http.post(`${this.ruta}signInWithPassword?key=${this.api_key}
    `,body);

  }
  logout()
    {

    }
    nuevoUsuario(u:UsuarioModel)
    {
     const body ={
        email:u.email,
        password:u.password,
        returnSecureToken:true
        }
        return this.http.post(`
        ${this.ruta}signUp?key=${this.api_key}
        `,body);
    }
}
