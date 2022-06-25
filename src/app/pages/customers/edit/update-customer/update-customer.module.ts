import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCustomerPageRoutingModule } from './update-customer-routing.module';

import { UpdateCustomerPage } from './update-customer.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCustomerPageRoutingModule,
    DynamicFormModule
  ],
  declarations: []
})
export class UpdateCustomerPageModule {}
