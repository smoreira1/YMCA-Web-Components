import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YmcaLoadingGraphicComponent } from './ymca-loading-graphic.component';

describe('YmcaLoadingGraphicComponent', () => {
  let component: YmcaLoadingGraphicComponent;
  let fixture: ComponentFixture<YmcaLoadingGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YmcaLoadingGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YmcaLoadingGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
