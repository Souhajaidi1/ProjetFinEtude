import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { recruitevaluationRoutingModule } from './recruit-evaluation-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    recruitevaluationRoutingModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule
  ]
})
export class recruitevaluationModule { }
