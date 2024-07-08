import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHRTestComponent } from './add-hrtest.component';

describe('AddHRTestComponent', () => {
  let component: AddHRTestComponent;
  let fixture: ComponentFixture<AddHRTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHRTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHRTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
