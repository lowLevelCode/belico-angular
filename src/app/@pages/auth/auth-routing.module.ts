import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestablecerPasswordComponent } from './restablecer-password/restablecer-password.component';


const routes: Routes = 
[
  { path: 'login', component: LoginComponent },  
  { path: 'restablecer-password', component: RestablecerPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
