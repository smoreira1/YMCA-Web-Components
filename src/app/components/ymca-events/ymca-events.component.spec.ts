import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YmcaEventsComponent } from './ymca-events.component';

describe('YmcaEventsComponent', () => {
  let component: YmcaEventsComponent;
  let fixture: ComponentFixture<YmcaEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YmcaEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YmcaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
