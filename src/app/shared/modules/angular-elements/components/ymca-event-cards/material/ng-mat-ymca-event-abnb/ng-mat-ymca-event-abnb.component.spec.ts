import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatYmcaEventAbnbComponent } from './ng-mat-ymca-event-abnb.component';

describe('NgMatYmcaEventAbnbComponent', () => {
  let component: NgMatYmcaEventAbnbComponent;
  let fixture: ComponentFixture<NgMatYmcaEventAbnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatYmcaEventAbnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatYmcaEventAbnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
