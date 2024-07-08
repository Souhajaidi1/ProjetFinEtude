import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { AddOfferFormComponent } from './add-offer-form/add-offer-form.component';
import { recruitoffersRoutingModule } from './recruit-offers-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [OfferManagementComponent , AddOfferFormComponent],
  imports: [
    CommonModule,
    recruitoffersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class recruitoffersModule { }
