import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { PagesComponent } from './pages/pages.component';
import { ComponentesComponent } from './componentes/componentes.component';


@NgModule({
  declarations: [
    PagesComponent,
    ComponentesComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
