import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsCalendarComponent } from './ss-calendar.component';

describe('SsCalendarComponent', () => {
  let component: SsCalendarComponent;
  let fixture: ComponentFixture<SsCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
