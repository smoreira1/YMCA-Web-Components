import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YmcaCatalogInitComponent } from './ymca-catalog-init.component';

describe('YmcaCatalogInitComponent', () => {
  let component: YmcaCatalogInitComponent;
  let fixture: ComponentFixture<YmcaCatalogInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YmcaCatalogInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YmcaCatalogInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
