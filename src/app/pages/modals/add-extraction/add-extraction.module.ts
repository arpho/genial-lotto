import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExtractionPageRoutingModule } from './add-extraction-routing.module';

import { AddExtractionPage } from './add-extraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExtractionPageRoutingModule
  ],
  declarations: [AddExtractionPage]
})
export class AddExtractionPageModule {}
