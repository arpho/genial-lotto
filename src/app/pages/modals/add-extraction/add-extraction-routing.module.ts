import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExtractionPage } from './add-extraction.page';

const routes: Routes = [
  {
    path: '',
    component: AddExtractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddExtractionPageRoutingModule {}
