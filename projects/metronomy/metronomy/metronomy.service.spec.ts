import { TestBed } from '@angular/core/testing';

import { MetronomyService } from './metronomy.service';

describe('MetronomyService', () => {
  let service: MetronomyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetronomyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
