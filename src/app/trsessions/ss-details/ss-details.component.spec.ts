import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsDetailsComponent } from './ss-details.component';

describe('SsDetailsComponent', () => {
  let component: SsDetailsComponent;
  let fixture: ComponentFixture<SsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
