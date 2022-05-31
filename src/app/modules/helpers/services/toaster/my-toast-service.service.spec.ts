import { TestBed } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

import { MyToastService } from './my-toast-service.service';

describe('MyToastServiceService', () => {
  let service: MyToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[ToastController]});
    service = TestBed.inject(MyToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
