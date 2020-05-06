import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRiesgoRoutingModule } from './indicadores-riesgo-routing.module';
import { IndicadorComponent } from './indicador/indicador.component';


@NgModule({
  declarations: [ IndicadorComponent],
  imports: [
    CommonModule,
    IndicadoresRiesgoRoutingModule
  ]
})
export class IndicadoresRiesgoModule { }
