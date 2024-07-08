import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface HRTest {
  idTestHR: string;
  interviewdate: Date;
  hour: string;
  duration: string;
  type: string;
}
@Component({
  selector: 'app-hrtest-list',
  templateUrl: './hrtest-list.component.html',
  styleUrls: ['./hrtest-list.component.scss']
})
export class HrtestListComponent implements OnInit {
  displayedColumns: string[] = ['idTestHR', 'interviewdate', 'hour', 'duration', 'type', 'action'];
  dataSource: MatTableDataSource<HRTest>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resourceName: string = '';
  constructor() {
    const tests: HRTest[] = [
      {idTestHR: '1', interviewdate: new Date(2024, 6, 3),hour:'12' ,duration:'2h' , type:'online'},
      {idTestHR: '2', interviewdate: new Date(2024, 6, 3),hour:'12' ,duration:'2h' , type:'online'},
      {idTestHR: '3', interviewdate: new Date(2024, 6, 3),hour:'12' ,duration:'2h' , type:'online'},
      {idTestHR: '4', interviewdate: new Date(2024, 6, 3),hour:'12' ,duration:'2h' , type:'online'},
    ];
    this.dataSource = new MatTableDataSource(tests);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter() {
    const filterValue = (this.dataSource as any).filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  resetFilters() {
    (this.dataSource as any).filterValue = '';
    this.applyFilter();
  }

  onSortData(event: any) {
    this.dataSource.sort = this.sort;
  }

  onPageChange() {
    this.dataSource.paginator = this.paginator;
  }

  editTestHR(testHR: HRTest) {
    // Implement edit logic here
  }

  deleteTestHR(testHR: HRTest) {
    // Implement delete logic here
  }

}
