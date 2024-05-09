import { TestBed } from '@angular/core/testing';

import { RecruitDashboardService } from './recruit-dashboard.service';

describe('RecruitDashboardService', () => {
  let service: RecruitDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
