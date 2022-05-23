import { TestBed } from '@angular/core/testing';

import { MyToastService } from './my-toast-service.service';

describe('MyToastServiceService', () => {
  let service: MyToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
