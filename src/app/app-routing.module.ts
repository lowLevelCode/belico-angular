import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: '', loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth', loadChildren: () =>
      import('./@pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'indicadores-de-riesgo', loadChildren: () =>
      import('./@pages/indicadores-riesgo/indicadores-riesgo.module').then(m => m.IndicadoresRiesgoModule)
  },
  {
    path: 'usuarios', loadChildren: () =>
      import('./@pages/usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'sucursales', loadChildren: () =>
      import('./@pages/sucursales/sucursales.module').then(m => m.SucursalesModule)
  },

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
