import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { SearchFilterService } from 'app/services/shared/search-filter.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RecruitOffersService } from 'app/services/recruitement/recruit-offers/recruit-offers.service';  // Adjust the import path as necessary
import { EditOfferDialogComponent } from './edit-offer-dialog/edit-offer-dialog.component';
import { AddOfferFormComponent } from '../add-offer-form/add-offer-form.component';
export interface Offer {
  offerId : number ;
  referenceoffer: string;
  position: string;
  remuneration: string;
  skills: string;
  nicetohave: string;
  studyingLevel: string;
  experience: string;
  formationExigees: string;
  contrat: string;
}

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.scss']
})
export class OfferManagementComponent implements OnInit, OnDestroy {
  offers: Offer[] = [];
  dataSource = new MatTableDataSource<Offer>(this.offers);
  displayedColumns: string[] = ['referenceoffer', 'position', 'remuneration', 'skills', 'nicetohave', 'studyingLevel', 'experience', 'formationExigees', 'contrat', 'action'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  subscription!: Subscription;
  resourceName: string = '';
  displayEditOfferComponentdialogRef: MatDialogRef<EditOfferDialogComponent>;
  displayAddOfferComponentdialogRef: MatDialogRef<AddOfferFormComponent>;
  isEdit: boolean;
  constructor(
    private searchFilterService: SearchFilterService,
    private dialog: MatDialog,
    private recruitOffersService: RecruitOffersService
  ) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.subscription = this.searchFilterService.offers$.subscribe(offers => {
      this.dataSource.data = offers;
    });
    this.loadOffers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadOffers(): void {
    this.recruitOffersService.getOffers().subscribe(
      offers => {
        this.offers = offers;
        this.dataSource.data = this.offers;
      },
      error => {
        console.error('Error loading offers', error);
      }
    );
  }

  deleteOffer(offer: Offer): void {
    this.recruitOffersService.DeleteOffer(offer.offerId).subscribe(
      () => {
        this.offers = this.offers.filter(o => o !== offer);
        this.dataSource.data = this.offers;
        console.log('Offer deleted successfully');
      },
      error => {
        console.error('Error deleting offer', error);
      }
    );
  }

  editOffer(offer: Offer): void {
    const dialogRef = this.dialog.open(EditOfferDialogComponent, {
      width: '400px',
      data: offer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recruitOffersService.EditOffer(result.referenceoffer, result).subscribe(
          updatedOffer => {
            // Update the local offers array
            const index = this.offers.findIndex(o => o.referenceoffer === updatedOffer.referenceoffer);
            if (index !== -1) {
              this.offers[index] = updatedOffer;
              this.dataSource.data = this.offers;
            }
            console.log('Offer updated successfully', updatedOffer);
          },
          error => {
            console.error('Error updating offer', error);
          }
        );
      }
    });
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
        case 'referenceoffer': return this.compare(a.referenceoffer, b.referenceoffer, isAsc);
        case 'position': return this.compare(a.position, b.position, isAsc);
        case 'contrat': return this.compare(a.contrat, b.contrat, isAsc);
        case 'remuneration': return this.compare(a.remuneration, b.remuneration, isAsc);
        case 'skills': return this.compare(a.skills, b.skills, isAsc);
        case 'nicetohave': return this.compare(a.nicetohave, b.nicetohave, isAsc);
        case 'studyingLevel': return this.compare(a.studyingLevel, b.studyingLevel, isAsc);
        case 'experience': return this.compare(a.experience, b.experience, isAsc);
        case 'formationExigees': return this.compare(a.formationExigees, b.formationExigees, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: string | number, b: string | number, isAsc: boolean): number {
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

  OpenDialogEditOffer(){
    const config: MatDialogConfig = {
      disableClose: false,
      hasBackdrop: true,
      width: '800px',
      height: '600px',
      data: {
        isEdit: false,
      }
    };
    this.displayEditOfferComponentdialogRef = this.dialog.open(EditOfferDialogComponent, config);
  }

  OpenDialogAddOffer(){
    const config: MatDialogConfig = {
      disableClose: false,
      hasBackdrop: true,
      width: '800px',
      height: '600px',
    };
    this.displayAddOfferComponentdialogRef = this.dialog.open(AddOfferFormComponent, config);
  }
}


