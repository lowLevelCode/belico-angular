import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RestablecerPasswordComponent } from './restablecer-password/restablecer-password.component';



@NgModule({
  declarations: [LoginComponent, RestablecerPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,    
    ReactiveFormsModule,     
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AuthModule { }
