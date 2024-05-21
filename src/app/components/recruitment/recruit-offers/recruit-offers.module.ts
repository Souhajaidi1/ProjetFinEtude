import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { AddOfferFormComponent } from './add-offer-form/add-offer-form.component';
import { recruitoffersRoutingModule } from './recruit-offers-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [OfferManagementComponent , AddOfferFormComponent],
  imports: [
    CommonModule,
    recruitoffersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class recruitoffersModule { }
