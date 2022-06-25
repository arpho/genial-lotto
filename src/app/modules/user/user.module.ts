import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './pages/login/login.page';
import { AuthGuard } from './services/authguard.service';
import { RoleGuardService } from './services/role-guards.service';
import { routes } from './user-routing.module'
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { LogoutUserComponent } from './components/logout-user/logout-user.component';



@NgModule({
  declarations: [LoginPage,
    LogoutUserComponent
  ],
  imports: [FormsModule,
     ReactiveFormsModule,
      IonicModule.forRoot(),
       RouterModule.forChild(routes),
    CommonModule,
     DynamicFormModule
  ],
  exports:[LogoutUserComponent]
})
export class UserModule { }

