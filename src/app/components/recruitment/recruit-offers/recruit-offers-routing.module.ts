import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-offer',
        loadChildren: () => import('./add-offer-form/add-offer-form.component').then(m => m.AddOfferFormComponent)
      },
      {
        path: 'offer-management',
        loadChildren: () => import('./offer-management/offer-management.component').then(m => m.OfferManagementComponent)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recruitoffersRoutingModule { }
