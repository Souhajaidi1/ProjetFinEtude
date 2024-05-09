import { TestBed } from '@angular/core/testing';

import { RecruitOffersService } from './recruit-offers.service';

describe('RecruitOffersService', () => {
  let service: RecruitOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
