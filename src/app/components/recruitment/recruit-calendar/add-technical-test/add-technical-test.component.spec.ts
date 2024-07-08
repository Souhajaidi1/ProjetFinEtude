import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnicalTestComponent } from './add-technical-test.component';

describe('AddTechnicalTestComponent', () => {
  let component: AddTechnicalTestComponent;
  let fixture: ComponentFixture<AddTechnicalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTechnicalTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnicalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
