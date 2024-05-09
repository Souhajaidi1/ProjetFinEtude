import { TestBed } from '@angular/core/testing';

import { RecruitEvaluationService } from './recruit-evaluation.service';

describe('RecruitEvaluationService', () => {
  let service: RecruitEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
