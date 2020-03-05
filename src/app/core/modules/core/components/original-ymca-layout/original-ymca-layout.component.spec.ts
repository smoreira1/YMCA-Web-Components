import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalYmcaLayoutComponent } from './original-ymca-layout.component';

describe('OriginalYmcaLayoutComponent', () => {
  let component: OriginalYmcaLayoutComponent;
  let fixture: ComponentFixture<OriginalYmcaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalYmcaLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalYmcaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
