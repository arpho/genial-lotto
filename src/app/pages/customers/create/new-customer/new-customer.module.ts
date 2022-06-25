import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCustomerPageRoutingModule } from './new-customer-routing.module';

import { NewCustomerPage } from './new-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCustomerPageRoutingModule
  ],
  declarations: []
})
export class NewCustomerPageModule {}
