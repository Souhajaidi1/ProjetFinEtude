import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicaltestListComponent } from './technicaltest-list.component';

describe('TechnicaltestListComponent', () => {
  let component: TechnicaltestListComponent;
  let fixture: ComponentFixture<TechnicaltestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicaltestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicaltestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
