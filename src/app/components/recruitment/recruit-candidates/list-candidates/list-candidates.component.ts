import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { SearchFilterService } from 'app/services/shared/search-filter.service';
import { RecruitCandidatesService } from 'app/services/recruitement/recruit-candidates/recruit-candidates.service';
import { MatDialog } from '@angular/material/dialog';

export interface Candidate {
  refapplication: number;
  cv: string;
  motivationletter: string;
  score: number;
  dateApplication: Date;
}

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.scss']
})
export class ListCandidatesComponent implements OnInit, OnDestroy {
  candidates: Candidate[] = [];
  dataSource = new MatTableDataSource<Candidate>(this.candidates);
  displayedColumns: string[] = ['refapplication', 'cv', 'motivationletter', 'dateApplication','score', 'action'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  subscription!: Subscription;
  resourceName: string = '';

  constructor(
    private searchFilterService: SearchFilterService,
    private recruitCandidatesService: RecruitCandidatesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.subscription = this.searchFilterService.candidate$.subscribe(candidates => {
      this.dataSource.data = candidates;
    });
    this.loadCandidates();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadCandidates(): void {
    this.recruitCandidatesService.getCandidates().subscribe(
      candidates => {
        this.candidates = candidates;
        this.dataSource.data = this.candidates;
      },
      error => {
        console.error('Error loading candidates', error);
      }
    );
  }

  onSortData(event: any): void {
    const data = this.dataSource.data.slice();
    if (!event.active || event.direction === '') {
      this.dataSource.data = data;
      return;
    }
    this.dataSource.data = data.sort((a, b) => {
      const isAsc = event.direction === 'asc';
      switch (event.active) {
        case 'refapplication': return this.compare(a.refapplication, b.refapplication, isAsc);
        case 'cv': return this.compare(a.cv, b.cv, isAsc);
        case 'motivationletter': return this.compare(a.motivationletter, b.motivationletter, isAsc);
        case 'dateApplication': return this.compare(a.dateApplication, b.dateApplication, isAsc);
        case 'score': return this.compare(a.score, b.score, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: string | number | Date, b: string | number | Date, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onPageChange(): void {
    this.searchFilterService.pageIndex = this.paginator.pageIndex;
    this.searchFilterService.pageSize = this.paginator.pageSize;
    this.searchFilterService.applyFilter();
  }

  applyFilter(): void {
    if (this.resourceName) {
      this.searchFilterService.resourceName = this.resourceName;
      this.searchFilterService.applyFilter();
    }
  }

  resetFilters(): void {
    this.resourceName = '';
    this.searchFilterService.resetFilters();
  }

  editcandidate(candidate: Candidate): void {
    // Your edit candidate logic here
  }

  deletecandidate(candidate: Candidate): void {
    // Your delete candidate logic here
  }
}

