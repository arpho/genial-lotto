import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseExtractionsPageRoutingModule } from './browse-extractions-routing.module';

import { BrowseExtractionsPage } from './browse-extractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseExtractionsPageRoutingModule
  ],
  declarations: [BrowseExtractionsPage]
})
export class BrowseExtractionsPageModule {}
