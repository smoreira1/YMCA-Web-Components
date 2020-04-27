import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFiltersComponent } from './action-filters.component';

describe('ActionFiltersComponent', () => {
  let component: ActionFiltersComponent;
  let fixture: ComponentFixture<ActionFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
