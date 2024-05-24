import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOfferFormComponent } from './add-offer-form/add-offer-form.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-offer',
        component:AddOfferFormComponent
      },
      {
        path: 'offer-management',
        component:OfferManagementComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recruitoffersRoutingModule { }
