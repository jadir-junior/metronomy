import { MetronomyService } from './metronomy.service';
import { TestBed } from '@angular/core/testing';

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
