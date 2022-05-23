import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { EditUserPage } from "./edit-user.page";
import { DynamicFormModule } from "src/app/modules/dynamic-form/dynamic-form.module";

const routes: Routes = [
  {
    path: "",
    component: EditUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DynamicFormModule,
  ],
  declarations: []
})
export class EditUserPageModule {}
