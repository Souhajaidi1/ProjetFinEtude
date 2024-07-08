import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : EvaluationComponent
      },
      {
        path: 'Listevaluation',
        component:TestListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recruitevaluationRoutingModule { }
