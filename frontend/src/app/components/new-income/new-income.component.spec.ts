import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncomeComponent } from './new-income.component';

describe('NewIncomeComponent', () => {
  let component: NewIncomeComponent;
  let fixture: ComponentFixture<NewIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
