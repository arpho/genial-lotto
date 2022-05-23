import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilterPopupPage } from './filter-popup.page';
import { DynamicFormModule } from '../../../dynamic-form/dynamic-form.module';

const routes: Routes = [
  {
    path: '',
    component: FilterPopupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicFormModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot(),
  ],
    declarations: [FilterPopupPage]
})
export class FilterPopupPageModule {}
