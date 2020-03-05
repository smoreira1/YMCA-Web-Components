import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirBnbLayoutComponent } from './air-bnb-layout.component';

describe('AirBnbLayoutComponent', () => {
  let component: AirBnbLayoutComponent;
  let fixture: ComponentFixture<AirBnbLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirBnbLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirBnbLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
