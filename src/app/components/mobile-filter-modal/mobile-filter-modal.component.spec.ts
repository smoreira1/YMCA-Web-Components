import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFilterModalComponent } from './mobile-filter-modal.component';

describe('MobileFilterModalComponent', () => {
  let component: MobileFilterModalComponent;
  let fixture: ComponentFixture<MobileFilterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFilterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
