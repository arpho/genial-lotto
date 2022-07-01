import { TestBed } from '@angular/core/testing';

import { DateIsPresentService } from './date-is-present.service';

describe('DateIsPresentService', () => {
  let service: DateIsPresentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateIsPresentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
