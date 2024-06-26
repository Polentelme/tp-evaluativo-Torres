import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { IniciodesesionComponent } from './pages/iniciodesesion/iniciodesesion.component';
import { RegistroComponent } from './pages/registro/registro.component';



@NgModule({
  declarations: [
    PagesComponent,
    IniciodesesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutentificacionModule { }
