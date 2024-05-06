import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'recruit-calendar',
        loadChildren: () => import('./recruit-calendar/recruit-calendar.module').then(m => m.recruitementModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'recruit-candidates',
        loadChildren: () => import('./recruit-candidates/recruit-candidates.module').then(m => m.recruitementModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'recruit-dashboard',
        loadChildren: () => import('./recruit-dashboard/recruit-dashboard.module').then(m => m.recruitementModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'recruit-evaluation',
        loadChildren: () => import('./recruit-evaluation/recruit-evaluation.module').then(m => m.recruitevaluationModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'recruit-offers',
        loadChildren: () => import('./recruit-offers/recruit-offers.module').then(m => m.recruitoffersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recruitementRoutingModule { }
