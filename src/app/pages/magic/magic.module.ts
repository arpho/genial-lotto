import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicPageRoutingModule } from './magic-routing.module';

import { MagicPage } from './magic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicPageRoutingModule
  ],
  declarations: [MagicPage]
})
export class MagicPageModule {}
