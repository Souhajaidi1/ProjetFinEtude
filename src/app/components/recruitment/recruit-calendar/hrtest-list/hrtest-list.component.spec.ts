import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrtestListComponent } from './hrtest-list.component';

describe('HrtestListComponent', () => {
  let component: HrtestListComponent;
  let fixture: ComponentFixture<HrtestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrtestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrtestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
