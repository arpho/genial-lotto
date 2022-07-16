import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervalsPageRoutingModule } from './intervals-routing.module';

import { IntervalsPage } from './intervals.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervalsPageRoutingModule,
    DynamicFormModule
  ],
  declarations: []
})
export class IntervalsPageModule {}
