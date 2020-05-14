import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationBottomSheetComponent } from './confirmation-bottom-sheet.component';

describe('ConfirmationBottomSheetComponent', () => {
  let component: ConfirmationBottomSheetComponent;
  let fixture: ComponentFixture<ConfirmationBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
