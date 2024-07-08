import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { TechnicaltestListComponent } from './technicaltest-list/technicaltest-list.component';
import { HrtestListComponent } from './hrtest-list/hrtest-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : CalendarComponent
      },
      {
        path: 'technical-test',
        component : TechnicaltestListComponent
      },
      {
        path: 'hr-interview',
        component : HrtestListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recruitcalendarRoutingModule { }
