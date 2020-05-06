import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicadorComponent } from './indicador/indicador.component';



const routes: Routes = [
  { path:'', component:IndicadorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRiesgoRoutingModule { }
