import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsInsertComponent } from './payments-insert.component';

describe('PaymentsInsertComponent', () => {
  let component: PaymentsInsertComponent;
  let fixture: ComponentFixture<PaymentsInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
