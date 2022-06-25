import { TestBed } from '@angular/core/testing';

import { CustomersServiceService } from './customers-service.service';

describe('CustomersServiceService', () => {
  let service: CustomersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
