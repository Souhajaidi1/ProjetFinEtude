import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectInterviewTypeDialog } from './calendar/SelectInterviewTypeDialog';
import { AddTechnicalTestComponent } from './add-technical-test/add-technical-test.component';
import { AddHRTestComponent } from './add-hrtest/add-hrtest.component';
import { recruitcalendarRoutingModule } from './recruit-calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { HrtestListComponent } from './hrtest-list/hrtest-list.component';
import { TechnicaltestListComponent } from './technicaltest-list/technicaltest-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    CalendarComponent,
    AddTechnicalTestComponent,
    AddHRTestComponent,
    SelectInterviewTypeDialog,
    HrtestListComponent,
    TechnicaltestListComponent
  ],
    entryComponents: [
      AddTechnicalTestComponent,
      AddHRTestComponent,
      SelectInterviewTypeDialog
    ],
  imports: [
    CommonModule,
    recruitcalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class recruitementModule { }
