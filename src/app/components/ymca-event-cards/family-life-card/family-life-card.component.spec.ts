import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLifeCardComponent } from './family-life-card.component';

describe('FamilyLifeCardComponent', () => {
  let component: FamilyLifeCardComponent;
  let fixture: ComponentFixture<FamilyLifeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyLifeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyLifeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
