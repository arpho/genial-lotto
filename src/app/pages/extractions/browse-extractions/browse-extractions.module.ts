import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseExtractionsPageRoutingModule } from './browse-extractions-routing.module';

import { BrowseExtractionsPage } from './browse-extractions.page';
import { ItemModule } from 'src/app/modules/item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseExtractionsPageRoutingModule,
    ItemModule
  ],
  declarations: [BrowseExtractionsPage]
})
export class BrowseExtractionsPageModule {}
