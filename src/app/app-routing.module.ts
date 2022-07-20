import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/user/services/authguard';
import { RoleGuardService } from './modules/user/services/role-guards.service';

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
    canActivate:[AuthGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'customers',
    canActivate:[AuthGuard,RoleGuardService],
    data:{expectedRole:2},
    loadChildren: () => import('./pages/customers/list/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'update-customer',
    canActivate:[AuthGuard,RoleGuardService],
    data:{expectedRole:2},
    loadChildren: () => import('./pages/customers/edit/update-customer/update-customer.module').then( m => m.UpdateCustomerPageModule)
  },
  {
    path: 'new-customer',
    canActivate:[AuthGuard,RoleGuardService],
    data:{expectedRole:2},
    loadChildren: () => import('./pages/customers/create/new-customer/new-customer.module').then( m => m.NewCustomerPageModule)
  },
  {
    path: 'apply-function2-weels',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/modals/apply-function2-weels/apply-function2-weels.module').then( m => m.ApplyFunction2WeelsPageModule)
  },
  {
    path: 'add-extraction',
    canActivate:[AuthGuard,RoleGuardService],
    data:{expectedRole:2},
    loadChildren: () => import('./pages/modals/add-extraction/add-extraction.module').then( m => m.AddExtractionPageModule)
  },
  {
    path: 'browsing',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/extractions/browsing/browsing.module').then( m => m.BrowsingPageModule)
  },
  {
    path: 'magic',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/magic/magic.module').then( m => m.MagicPageModule)
  },
  {
    path: 'intervals',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/intervals/intervals.module').then( m => m.IntervalsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
