import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTechnicalTestComponent } from '../add-technical-test/add-technical-test.component';
import { AddHRTestComponent } from '../add-hrtest/add-hrtest.component';
import { SelectInterviewTypeDialog } from './SelectInterviewTypeDialog';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  currentMonth: number;
  currentYear: number;
  daysInMonth: number[] = [];
  otherMonthDays: number[] = [];
  today: Date = new Date();

  constructor(public dialog: MatDialog) {
    const now = new Date();
    this.currentMonth = now.getMonth();
    this.currentYear = now.getFullYear();
  }

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): void {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    this.otherMonthDays = Array.from({ length: firstDay });
  }

  prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.renderCalendar();
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.renderCalendar();
  }

  isToday(day: number): boolean {
    const today = new Date();
    return day === today.getDate() &&
           this.currentMonth === today.getMonth() &&
           this.currentYear === today.getFullYear();
  }

  openDialog(day: number): void {
    const date = new Date(this.currentYear, this.currentMonth, day);
    const dialogRef = this.dialog.open(SelectInterviewTypeDialog, {
      width: '250px',
      data: { date: date }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'technical') {
        this.dialog.open(AddTechnicalTestComponent, {
          width: '400px',
          data: { date: date }
        });
      } else if (result === 'hr') {
        this.dialog.open(AddHRTestComponent, {
          width: '400px',
          data: { date: date }
        });
      }
    });
  }
}
