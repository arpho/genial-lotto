import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TrailingZeroPipe } from 'src/app/pipes/trailing-zero.pipe';

import { NumeroEstrattoComponent } from './numero-estratto.component';

describe('NumeroEstrattoComponent', () => {
  let component: NumeroEstrattoComponent;
  let fixture: ComponentFixture<NumeroEstrattoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroEstrattoComponent,TrailingZeroPipe ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumeroEstrattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
