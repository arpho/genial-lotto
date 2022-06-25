import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers-service.service';

describe('CustomersServiceService', () => {
  let service: CustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
