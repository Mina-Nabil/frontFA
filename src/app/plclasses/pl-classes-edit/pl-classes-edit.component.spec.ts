import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlClassesEditComponent } from './pl-classes-edit.component';

describe('PlClassesEditComponent', () => {
  let component: PlClassesEditComponent;
  let fixture: ComponentFixture<PlClassesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlClassesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlClassesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
