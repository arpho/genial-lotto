import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCustomerPage } from './new-customer.page';

const routes: Routes = [
  {
    path: '',
    component: NewCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCustomerPageRoutingModule {}
