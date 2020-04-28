import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TppConfirmationComponent } from './tpp-confirmation.component';

describe('TppConfirmationComponent', () => {
  let component: TppConfirmationComponent;
  let fixture: ComponentFixture<TppConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TppConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TppConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
