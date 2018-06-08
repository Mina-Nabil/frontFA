import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlClassesTableComponent } from './pl-classes-table.component';

describe('PlClassesTableComponent', () => {
  let component: PlClassesTableComponent;
  let fixture: ComponentFixture<PlClassesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlClassesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlClassesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
