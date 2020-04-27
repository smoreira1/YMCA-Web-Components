import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatalogJupiterComponent } from './products-catalog-jupiter.component';

describe('ProductsCatalogJupiterComponent', () => {
  let component: ProductsCatalogJupiterComponent;
  let fixture: ComponentFixture<ProductsCatalogJupiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCatalogJupiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCatalogJupiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
