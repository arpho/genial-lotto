import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, AlertController } from "@ionic/angular";

import { ItemsListComponent } from "./items-list.component";
import { FilterItemsPipe } from "../../pipes/filter-items.pipe";
import { MyItemComponent } from "../item/item.component";

describe("ItemsListComponent", () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsListComponent, FilterItemsPipe, MyItemComponent],
      imports: [IonicModule],
      providers: [AlertController]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
