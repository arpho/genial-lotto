import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPageRoutingModule,
    DynamicFormModule
  ],
  declarations: []
})
export class CrudPageModule {}
