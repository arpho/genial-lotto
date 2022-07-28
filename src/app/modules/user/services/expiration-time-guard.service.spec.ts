import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotAuthorizedPage } from '../pages/not-authorized/not-authorized.page';

import { ExpirationTimeGuard } from './expiration-time-guard.service';

describe('ExpirationTimeGuardService', () => {
  let service: ExpirationTimeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([{
        path:"users/not-authorized",
        component:NotAuthorizedPage
      }])]
    });
    service = TestBed.inject(ExpirationTimeGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should grant expirationTime in 3000 ac",()=>{
    expect(service.isCurrent(String(new Date("3000-12-31").getTime()))).toBeTrue()
  })
  it("should not grant expirationTime in 2000 ac",()=>{
    expect(service.isCurrent(String(new Date("2000-12-31").getTime()))).toBeFalse()
  })
});
