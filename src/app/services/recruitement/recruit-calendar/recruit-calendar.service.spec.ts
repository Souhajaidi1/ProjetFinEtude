import { TestBed } from '@angular/core/testing';

import { RecruitCalendarService } from './recruit-calendar.service';

describe('RecruitCalendarService', () => {
  let service: RecruitCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
