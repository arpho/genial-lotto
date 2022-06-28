import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExtractionPageRoutingModule } from './add-extraction-routing.module';

import { AddExtractionPage } from './add-extraction.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExtractionPageRoutingModule,
    DynamicFormModule
  ],
  declarations: [AddExtractionPage]
})
export class AddExtractionPageModule {}
