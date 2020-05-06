import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalComponent } from './sucursal/sucursal.component';


@NgModule({
  declarations: [SucursalComponent],
  imports: [
    CommonModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
