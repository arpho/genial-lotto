import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsingPageRoutingModule } from './browsing-routing.module';

import { BrowsingPage } from './browsing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsingPageRoutingModule
  ],
  declarations: []
})
export class BrowsingPageModule {}
