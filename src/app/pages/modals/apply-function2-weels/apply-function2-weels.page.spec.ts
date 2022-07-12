import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { ApplyFunction2WeelsPage } from './apply-function2-weels.page';

describe('ApplyFunction2WeelsPage', () => {
  let component: ApplyFunction2WeelsPage;
  let fixture: ComponentFixture<ApplyFunction2WeelsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyFunction2WeelsPage ],
      imports: [IonicModule.forRoot()],
      providers:[NavParams]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyFunction2WeelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
