import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component:ListCandidatesComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recruitcandidatesRoutingModule { }
