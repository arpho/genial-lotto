import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCustomerPageRoutingModule } from './update-customer-routing.module';

import { UpdateCustomerPage } from './update-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCustomerPageRoutingModule
  ],
  declarations: []
})
export class UpdateCustomerPageModule {}
