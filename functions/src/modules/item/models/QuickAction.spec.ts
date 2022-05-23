import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { QuickAction } from "./QuickAction";
describe("quickAction slould be instantiated", function() {
  const quickAction = new QuickAction({
    icon: "icon_test",
    title: "title",
    description: "description",
    action: (params: { router: any; alertCtrl: any }) => {
      return {};
    }
  });
  it("checking object's parameters", () => {
    expect(quickAction.getTitle()).toBe("title");
    expect(quickAction.getIcon()).toBe("icon_test");
    expect(quickAction.getDescription()).toBe("description");
    expect(quickAction.getAction()).toBeTruthy();
  });
});
