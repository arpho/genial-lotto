import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsingPage } from './browsing.page';

const routes: Routes = [
  {
    path: '',
    component: BrowsingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowsingPageRoutingModule {}
