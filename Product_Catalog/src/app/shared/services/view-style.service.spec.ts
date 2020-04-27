import { TestBed } from '@angular/core/testing';

import { ViewStyleService } from './view-style.service';

describe('ViewStyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewStyleService = TestBed.get(ViewStyleService);
    expect(service).toBeTruthy();
  });
});
