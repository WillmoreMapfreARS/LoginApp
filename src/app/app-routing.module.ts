import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"registro",component:RegistroComponent},
  {path:"**",pathMatch:"full", redirectTo:"registro"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
