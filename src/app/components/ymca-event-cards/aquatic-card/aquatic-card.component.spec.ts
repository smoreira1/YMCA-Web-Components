import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticCardComponent } from './aquatic-card.component';

describe('AquaticCardComponent', () => {
  let component: AquaticCardComponent;
  let fixture: ComponentFixture<AquaticCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquaticCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
