import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioAltaComponent } from './usuario-alta/usuario-alta.component';


const routes: Routes = [
  {path:'alta', component:UsuarioAltaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
