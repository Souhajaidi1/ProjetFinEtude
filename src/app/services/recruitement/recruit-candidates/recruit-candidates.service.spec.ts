import { TestBed } from '@angular/core/testing';

import { RecruitCandidatesService } from './recruit-candidates.service';

describe('RecruitCandidatesService', () => {
  let service: RecruitCandidatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitCandidatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
