import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tableComponent } from './table/table.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    tableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class PagesModule { }
