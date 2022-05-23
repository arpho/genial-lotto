import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotAuthorizedPage } from './not-authorized.page';

const routes: Routes = [
  {
    path: '',
    component: NotAuthorizedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotAuthorizedPage]
})
export class NotAuthorizedPageModule {}
