import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario:UsuarioModel = new UsuarioModel("","","");
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.usuario.email="mwlordv@gmail.com";
  }

  onSubmit(formulario:NgForm){
    if(formulario.invalid)
    {
      return;
    }
    this.auth.nuevoUsuario(this.usuario).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    });
  }

}
