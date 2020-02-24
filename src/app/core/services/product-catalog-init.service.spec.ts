import { TestBed } from '@angular/core/testing';

import { ProductCatalogInitService } from './product-catalog-init.service';

describe('ProductCatalogInitService', () => {
  let service: ProductCatalogInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCatalogInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
