import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { BrowsingPage } from './browsing.page';

describe('BrowsingPage', () => {
  let component: BrowsingPage;
  let fixture: ComponentFixture<BrowsingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsingPage ],
      imports: [IonicModule.forRoot()],
      providers:[NavParams]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowsingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
