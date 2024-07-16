import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RecruitCalendarService } from 'app/services/recruitement/recruit-calendar/recruit-calendar.service';
import { AddHRTestComponent } from 'app/components/recruitment/recruit-calendar/add-hrtest/add-hrtest.component';


export interface HRTest {
  id: number;
  interviewdate: Date;
  hour: string;
  duration: string;
  type: string;
}

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'interviewdate', 'hour', 'duration', 'type', 'action'];
  hrTests: MatTableDataSource<HRTest> = new MatTableDataSource();
  techTests: MatTableDataSource<HRTest> = new MatTableDataSource();
  showHRTests = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private recruitService: RecruitCalendarService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchAllTests();
  }

  fetchAllTests() {
    this.recruitService.getAllTests().subscribe(
      (tests: HRTest[]) => {
        const hrData = tests.filter(test => test.type === 'HR');
        const techData = tests.filter(test => test.type === 'Technical');
        this.hrTests.data = hrData;
        this.techTests.data = techData;
        this.applyPaginationAndSort();
      },
      error => {
        console.error('Error fetching all tests', error);
      }
    );
  }

  applyPaginationAndSort() {
    this.hrTests.paginator = this.paginator;
    this.hrTests.sort = this.sort;
    this.techTests.paginator = this.paginator;
    this.techTests.sort = this.sort;
  }

  toggleMode(event: any): void {
    this.showHRTests = event.checked;
    this.applyPaginationAndSort(); // Reapply sorting and pagination
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    if (this.showHRTests) {
      this.hrTests.filter = filterValue;
    } else {
      this.techTests.filter = filterValue;
    }
  }

  resetFilters() {
    if (this.showHRTests) {
      this.hrTests.filter = '';
    } else {
      this.techTests.filter = '';
    }
    this.applyFilter('');
  }

  editTest(test: HRTest) {
    const dialogRef = this.dialog.open(AddHRTestComponent, {
      width: '250px',
      data: test
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recruitService.updateTest(test.id, result).subscribe(
          updatedTest => {
            Object.assign(test, updatedTest);
            this.refreshTable();
          },
          error => {
            console.error('Error updating test', error);
          }
        );
      }
    });
  }

  deleteTest(test: HRTest) {
    this.recruitService.deleteTest(test.id).subscribe(
      () => {
        if (this.showHRTests) {
          this.hrTests.data = this.hrTests.data.filter(t => t.id !== test.id);
        } else {
          this.techTests.data = this.techTests.data.filter(t => t.id !== test.id);
        }
        this.refreshTable();
      },
      error => {
        console.error('Error deleting test', error);
      }
    );
  }

  refreshTable() {
    this.applyPaginationAndSort();
  }
}

