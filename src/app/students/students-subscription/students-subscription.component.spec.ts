import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSubscriptionComponent } from './students-subscription.component';

describe('StudentsSubscriptionComponent', () => {
  let component: StudentsSubscriptionComponent;
  let fixture: ComponentFixture<StudentsSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
