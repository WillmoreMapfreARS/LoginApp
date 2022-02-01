import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario:UsuarioModel = new UsuarioModel("","","");
  constructor() { }

  ngOnInit(): void {
    this.usuario.email="mwlordv@gmail.com";
  }

  onSubmit(formulario:NgForm){
    if(formulario.invalid)
    {
      return;
    }
    console.log(formulario);
  }

}
