import { TestBed } from '@angular/core/testing';

import { EstrazioniService } from './estrazioni.service';

describe('EstrazioniService', () => {
  let service: EstrazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstrazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
