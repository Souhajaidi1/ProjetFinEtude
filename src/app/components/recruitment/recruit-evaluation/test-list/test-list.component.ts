import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Test {
  id: string;
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
  hrTests: MatTableDataSource<Test>;
  techTests: MatTableDataSource<Test>;
  showHRTests = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Sample data for HR tests
    const hrData: Test[] = [
      { id: '1', interviewdate: new Date(2024, 6, 1), hour: '10:00', duration: '60m', type: 'HR' },
      { id: '2', interviewdate: new Date(2024, 6, 2), hour: '11:00', duration: '45m', type: 'HR' },
      { id: '3', interviewdate: new Date(2024, 6, 3), hour: '12:00', duration: '30m', type: 'HR' },
      { id: '4', interviewdate: new Date(2024, 6, 4), hour: '13:00', duration: '90m', type: 'HR' },
    ];
    // Sample data for Technical tests
    const techData: Test[] = [
      { id: '1', interviewdate: new Date(2024, 6, 1), hour: '10:00', duration: '2h', type: 'Technical' },
      { id: '2', interviewdate: new Date(2024, 6, 2), hour: '11:00', duration: '1h', type: 'Technical' },
      { id: '3', interviewdate: new Date(2024, 6, 3), hour: '12:00', duration: '3h', type: 'Technical' },
      { id: '4', interviewdate: new Date(2024, 6, 4), hour: '13:00', duration: '2h', type: 'Technical' },
    ];
    this.hrTests = new MatTableDataSource(hrData);
    this.techTests = new MatTableDataSource(techData);
  }

  ngOnInit() {
    this.hrTests.paginator = this.paginator;
    this.hrTests.sort = this.sort;
    this.techTests.paginator = this.paginator;
    this.techTests.sort = this.sort;
  }

  toggleMode(event: any): void {
    this.showHRTests = event.checked;
    this.onSortData(); // Reapply sorting and pagination
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

  onSortData() {
    if (this.showHRTests) {
      this.hrTests.sort = this.sort;
    } else {
      this.techTests.sort = this.sort;
    }
  }

  onPageChange() {
    if (this.showHRTests) {
      this.hrTests.paginator = this.paginator;
    } else {
      this.techTests.paginator = this.paginator;
    }
  }

  editTest(test: Test) {
    // Implement edit logic here
  }

  deleteTest(test: Test) {
    // Implement delete logic here
  }

}
