// tslint:disable: quotemark
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavController, ModalController } from "@ionic/angular";
import { FilterItemsPipe } from "../../pipes/filter-items.pipe";
import { MyItemComponent } from "./item.component";
import { ItemModule } from "../../item.module";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
  APP_BASE_HREF
} from "@angular/common";

describe("MyItemComponent", () => {
  let component: MyItemComponent;
  let fixture: ComponentFixture<MyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), ItemModule],
      providers: [
        NavController,
        ModalController,
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: "/my/app" }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
