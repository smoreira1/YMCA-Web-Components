import { TestBed } from '@angular/core/testing';

import { BrowserConfigService } from './browser-config.service';

describe('BrowserConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserConfigService = TestBed.get(BrowserConfigService);
    expect(service).toBeTruthy();
  });
});
