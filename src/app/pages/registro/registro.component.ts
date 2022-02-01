import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario:UsuarioModel = new UsuarioModel("","","");
  recurdarme=false;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(formulario:NgForm){
    if(formulario.invalid)
    {
      return;
    }
    
    Swal.fire({
      title:"Favor espere",
      text:"Espere..",
      icon: 'info',
    })
    Swal.showLoading();
    this.auth.nuevoUsuario(this.usuario).subscribe((data :any)=>{
      this.auth.guardarToken(data.idToken);
      Swal.fire({
        title:"Usuario Registrado",
        text:"Usuario Regstrado exitosamente",
        icon: 'success',
      })
      if(this.recurdarme)
      {
        localStorage.setItem("email",this.usuario.email);
      }
      this.router.navigateByUrl("/home");
    },error=>{
      Swal.fire({
        title:"Usuario Registrado",
        text: error.error.error.message,
        icon: 'error',
      })
    });
  }

}
