import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { UpdateCustomerPage } from './update-customer.page';

describe('UpdateCustomerPage', () => {
  let component: UpdateCustomerPage;
  let fixture: ComponentFixture<UpdateCustomerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerPage ],
      imports: [IonicModule.forRoot()],
      providers:[NavParams]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
