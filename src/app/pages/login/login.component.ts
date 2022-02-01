import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel = new UsuarioModel("","","");
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
   this.auth.login(this.usuario).subscribe(data=>{
     console.log(data);
   },error=>{
     console.log(error);
   });
  }

}
