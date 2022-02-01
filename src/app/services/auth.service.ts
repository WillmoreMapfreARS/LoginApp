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
  constructor( private http:HttpClient) {

    this.token=this.leerToken();
   }



  public Usuario: UsuarioModel= new UsuarioModel("","","");

  public token:any;
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
localStorage.removeItem("token");
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
    guardarToken(token:string)
    {
      localStorage.setItem("token",token);
      let hoy= new Date();
      hoy.setSeconds(3600);
      localStorage.setItem("expira",hoy.getTime().toString());

    }

    leerToken()
    {
      if(localStorage.getItem("token") )
      {
        this.token=localStorage.getItem("token");
      }
      else
      {
        this.token="";
      }
      return this.token;
    }
    estaLogeado():boolean
    {
      if(this.token.lenght<2)
      {
        return false;
      }
      const expira = Number( localStorage.getItem("expira"));
      const expiraDate= new Date();
      expiraDate.setTime(expira);

      if(expiraDate > new Date())
      {
        return true;
      }
      else
      {
        return false;
      }


        
     
    }
}
