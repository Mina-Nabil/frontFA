import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsAddComponent } from './ss-add.component';

describe('SsAddComponent', () => {
  let component: SsAddComponent;
  let fixture: ComponentFixture<SsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
