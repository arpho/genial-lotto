import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyFunction2WeelsPage } from './apply-function2-weels.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyFunction2WeelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyFunction2WeelsPageRoutingModule {}
