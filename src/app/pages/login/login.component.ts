import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel = new UsuarioModel("","","");
recurdarme=false;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("email"))
    {
      this.usuario.email=localStorage.getItem("email");
      this.recurdarme=true;
    }
    
  }
  onSubmit(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    Swal.fire({
      title:"Favor espere",
      text:"Espere..",
      icon: 'info',
    })
    Swal.showLoading();
   this.auth.login(this.usuario).subscribe((data:any)=>{
     

    this.router.navigateByUrl("home");
    if(this.recurdarme)
    {
      localStorage.setItem("email",this.usuario.email);
    }
     this.auth.guardarToken(data.idToken)
    
  Swal.close();
     
   },error=>{
    Swal.fire({
      title:"Error",
      text: error.error.error.message,
      icon: 'error',
    })
   });
  }

}
