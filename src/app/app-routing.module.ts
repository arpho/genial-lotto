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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
