import { TestBed } from '@angular/core/testing';

import { CardIconService } from './card-icon.service';

describe('CardIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardIconService = TestBed.get(CardIconService);
    expect(service).toBeTruthy();
  });
});
