import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseExtractionsPage } from './browse-extractions.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseExtractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseExtractionsPageRoutingModule {}
