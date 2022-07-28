import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/user/services/authguard';
import { ExpirationTimeGuard } from './modules/user/services/expiration-time-guard.service';
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
    canActivate:[AuthGuard,RoleGuardService,ExpirationTimeGuard],
    data:{maximumRoleLevel:2},
    loadChildren: () => import('./pages/customers/list/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'update-customer',
    canActivate:[AuthGuard,RoleGuardService,ExpirationTimeGuard],
    data:{maximumRoleLevel:2},
    loadChildren: () => import('./pages/customers/edit/update-customer/update-customer.module').then( m => m.UpdateCustomerPageModule)
  },
  {
    path: 'new-customer',
    canActivate:[AuthGuard,RoleGuardService],
    data:{maximumRoleLevel:2},
    loadChildren: () => import('./pages/customers/create/new-customer/new-customer.module').then( m => m.NewCustomerPageModule)
  },
  {
    path: 'apply-function2-weels',
    canActivate:[AuthGuard,ExpirationTimeGuard],
    loadChildren: () => import('./pages/modals/apply-function2-weels/apply-function2-weels.module').then( m => m.ApplyFunction2WeelsPageModule)
  },
  {
    path: 'add-extraction',
    canActivate:[AuthGuard,RoleGuardService,ExpirationTimeGuard],
    data:{maximumRoleLevel:2},
    loadChildren: () => import('./pages/modals/add-extraction/add-extraction.module').then( m => m.AddExtractionPageModule)
  },
  {
    path: 'browsing',
    canActivate:[AuthGuard,ExpirationTimeGuard],
    loadChildren: () => import('./pages/extractions/browsing/browsing.module').then( m => m.BrowsingPageModule)
  },
  {
    path: 'magic',
    canActivate:[AuthGuard,ExpirationTimeGuard],
    loadChildren: () => import('./pages/magic/magic.module').then( m => m.MagicPageModule)
  },
  {
    path: 'intervals',
    canActivate:[AuthGuard,ExpirationTimeGuard],
    loadChildren: () => import('./pages/intervals/intervals.module').then( m => m.IntervalsPageModule)
  },

  {
    path: 'crud',
    loadChildren: () => import('./pages/extractions/crud/crud.module').then( m => m.CrudPageModule),
    canActivate:[AuthGuard,RoleGuardService],
    data:{maximumRoleLevel:2}
  },
  {
    path: 'edit',
    canActivate:[AuthGuard,ExpirationTimeGuard,RoleGuardService],
    data:{maximumRoleLevel:2},
    loadChildren: () => import('./pages/extractions/edit/edit.module').then( m => m.EditPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
