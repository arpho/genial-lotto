import { TestBed } from '@angular/core/testing';

import { ExpirationTimeGuardService } from './expiration-time-guard.service';

describe('ExpirationTimeGuardService', () => {
  let service: ExpirationTimeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpirationTimeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
