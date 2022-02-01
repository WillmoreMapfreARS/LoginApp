import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ruta:string ="https://identitytoolkit.googleapis.com/v1/accounts:";
  // registro: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] 
  //login: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor() { }
public Usuario: UsuarioModel= new UsuarioModel("","","");
  login(u:UsuarioModel)
  {
    body:{
    email:u.email;
    password:u.password;
    returnSecureToken:true;
    }

  }
  logout()
    {

    }
}
