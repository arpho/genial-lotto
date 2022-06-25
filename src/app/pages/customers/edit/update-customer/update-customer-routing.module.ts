import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCustomerPage } from './update-customer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCustomerPageRoutingModule {}
