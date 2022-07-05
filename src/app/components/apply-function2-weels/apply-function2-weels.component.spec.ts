import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyFunction2WeelsComponent } from './apply-function2-weels.component';

describe('ApplyFunction2WeelsComponent', () => {
  let component: ApplyFunction2WeelsComponent;
  let fixture: ComponentFixture<ApplyFunction2WeelsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyFunction2WeelsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyFunction2WeelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
