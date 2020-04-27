import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatYmcaEventCardComponent } from './ng-mat-ymca-event-card.component';

describe('NgMatYmcaEventCardComponent', () => {
  let component: NgMatYmcaEventCardComponent;
  let fixture: ComponentFixture<NgMatYmcaEventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatYmcaEventCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatYmcaEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
