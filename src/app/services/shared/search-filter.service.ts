import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { Offer } from 'app/components/recruitment/recruit-offers/offer-management/offer-management.component';
import { Candidate } from 'app/components/recruitment/recruit-candidates/list-candidates/list-candidates.component';
@Injectable()
export class SearchFilterService {
  offers$: BehaviorSubject<Offer[]> = new BehaviorSubject<Offer[]>([]);
  candidate$: BehaviorSubject<Candidate[]> = new BehaviorSubject<Candidate[]>([]);
  periodFrom?: Date;
  periodTo?: Date;
  resourceName: string = '';
  onlyMySubordinates: boolean = false;
  selectedActivitiesIdentifiers: any[] = [];
  selectedStatusesIdentifiers: any[] = [];
  pageIndex: number = 0;
  pageSize: number = 10;
  resultChanged = new Subject<void>();
  showingDataLastFilter: any[] = [];
  private allOffers: Offer[] = [
    {
      referenceoffer: '123ac', position: 'Software Engineer', remuneration: '2500', skills: 'dev', nicetohave: 'azure', studyingLevel: 'bac+5', experience: 'more than 5y', formationExigees: 'master', contrat: 'CDI',
      offerId: 0
    },
    {
      referenceoffer: '124ac', position: 'Marketing Manager', remuneration: '3000', skills: 'marketing', nicetohave: 'seo', studyingLevel: 'bac+3', experience: '3-5 years', formationExigees: 'bachelor', contrat: 'CDD',
      offerId: 1
    },
    {
      referenceoffer: '123ac', position: 'Software Engineer', remuneration: '2500', skills: 'dev', nicetohave: 'azure', studyingLevel: 'bac+5', experience: 'more than 5y', formationExigees: 'master', contrat: 'Internship',
      offerId: 2
    },
    {
      referenceoffer: '124ac', position: 'Marketing Manager', remuneration: '3000', skills: 'marketing', nicetohave: 'seo', studyingLevel: 'bac+3', experience: '3-5 years', formationExigees: 'bachelor', contrat: 'Internship',
      offerId: 3
    },
    {
      referenceoffer: '123ac', position: 'Software Engineer', remuneration: '2500', skills: 'dev', nicetohave: 'azure', studyingLevel: 'bac+5', experience: 'more than 5y', formationExigees: 'master', contrat: 'CDD',
      offerId: 4
    },
    {
      referenceoffer: '124ac', position: 'Marketing Manager', remuneration: '3000', skills: 'marketing', nicetohave: 'seo', studyingLevel: 'bac+5', experience: '3-5 years', formationExigees: 'bachelor', contrat: 'CDI',
      offerId: 5
    },
  ];
  rowSpan: number;
    constructor() {
      this.loadOffers();
        // do nothing
    }

    applyFilter() {
      let filteredOffers = this.allOffers;

      if (this.onlyMySubordinates) {
        // Assuming 'isSubordinate' is a boolean property of an offer
        filteredOffers = filteredOffers.filter(offer => offer.position);
      }

      if (this.selectedActivitiesIdentifiers.length > 0) {
        filteredOffers = filteredOffers.filter(offer => this.selectedActivitiesIdentifiers.includes(offer.contrat));
      }

      if (this.selectedStatusesIdentifiers.length > 0) {
        filteredOffers = filteredOffers.filter(offer => this.selectedStatusesIdentifiers.includes(offer.referenceoffer));
      }

      this.updateOffers(filteredOffers);
    }

    resetFilters() {
      this.periodFrom = undefined;
      this.periodTo = undefined;
      this.resourceName = '';
      this.onlyMySubordinates = false;
      this.selectedActivitiesIdentifiers = [];
      this.selectedStatusesIdentifiers = [];
      this.pageIndex = 0;
      this.loadOffers();
    }

    loadOffers() {
      // Assuming 'allOffers' is pre-loaded with data
      this.updateOffers(this.allOffers);
    }

    private updateOffers(offers: Offer[]) {
      const start = this.pageIndex * this.pageSize;
      const end = start + this.pageSize;
      this.offers$.next(offers.slice(start, end));
    }
  }
