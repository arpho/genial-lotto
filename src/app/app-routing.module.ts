import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },

  

  {path:"users",
  
  loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)
},


  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/list/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'update-customer',
    loadChildren: () => import('./pages/customers/edit/update-customer/update-customer.module').then( m => m.UpdateCustomerPageModule)
  },
  {
    path: 'new-customer',
    loadChildren: () => import('./pages/customers/create/new-customer/new-customer.module').then( m => m.NewCustomerPageModule)
  },
  {
    path: 'apply-function2-weels',
    loadChildren: () => import('./pages/modals/apply-function2-weels/apply-function2-weels.module').then( m => m.ApplyFunction2WeelsPageModule)
  },
  {
    path: 'add-extraction',
    loadChildren: () => import('./pages/modals/add-extraction/add-extraction.module').then( m => m.AddExtractionPageModule)
  },
  {
    path: 'browsing',
    loadChildren: () => import('./pages/extractions/browsing/browsing.module').then( m => m.BrowsingPageModule)
  },
  {
    path: 'magic',
    loadChildren: () => import('./pages/magic/magic.module').then( m => m.MagicPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
