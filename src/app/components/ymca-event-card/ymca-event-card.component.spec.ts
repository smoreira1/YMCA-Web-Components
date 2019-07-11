import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YmcaEventCardComponent } from './ymca-event-card.component';

describe('YmcaEventCardComponent', () => {
  let component: YmcaEventCardComponent;
  let fixture: ComponentFixture<YmcaEventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YmcaEventCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YmcaEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
