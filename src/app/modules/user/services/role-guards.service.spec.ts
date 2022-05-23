import { TestBed } from "@angular/core/testing";
import { Router, RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthGuard } from "./authguard.service";

import { RoleGuardService } from "./role-guards.service";

describe("RoleGuardsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule]
    })
  );

  it("should be created", () => {
    const service: RoleGuardService = TestBed.get(RoleGuardService);
    expect(service).toBeTruthy();
  });
});
