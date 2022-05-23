import { TestBed } from "@angular/core/testing";

import { MessagesService } from "./messages.service";

describe("MessagesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MessagesService = TestBed.get(MessagesService);
    expect(service).toBeTruthy();
  });
  it("should be working", () => {
    const service: MessagesService = TestBed.get(MessagesService);
    const message = "this is a test";
    service.setMessage({ key: "test", message: message });
    expect(service.getMessage("test")).toBe(message);
  });
});
