import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NotAuthorizedPage } from "./not-authorized.page";

describe("NotAuthorizedPage", () => {
  let component: NotAuthorizedPage;
  let fixture: ComponentFixture<NotAuthorizedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotAuthorizedPage],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthorizedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
