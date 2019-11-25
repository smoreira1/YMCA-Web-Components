import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStyleBarComponent } from './view-style-bar.component';

describe('ViewStyleBarComponent', () => {
  let component: ViewStyleBarComponent;
  let fixture: ComponentFixture<ViewStyleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStyleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStyleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
