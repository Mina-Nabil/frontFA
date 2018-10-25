import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsAttendanceComponent } from './ss-attendance.component';

describe('SsAttendanceComponent', () => {
  let component: SsAttendanceComponent;
  let fixture: ComponentFixture<SsAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
