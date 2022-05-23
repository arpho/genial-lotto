import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyToastService } from './services/toaster/my-toast-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[MyToastService]
})
export class HelpersModule { }
