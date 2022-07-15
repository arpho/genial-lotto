import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicPage } from './magic.page';

const routes: Routes = [
  {
    path: '',
    component: MagicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicPageRoutingModule {}
