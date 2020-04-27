import { TestBed } from '@angular/core/testing';

import { YMCAEventsService } from './ymca-events.service';

describe('EventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YMCAEventsService = TestBed.get(YMCAEventsService);
    expect(service).toBeTruthy();
  });
});
