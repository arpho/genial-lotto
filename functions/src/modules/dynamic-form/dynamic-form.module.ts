import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QuestionFormComponent } from './components/question-form-component/question-form-component.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionControlService } from './services/question-control.service';
import { ItemModule } from '../item/item.module';
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import { EmailFieldComponent } from './components/email-field/email-field.component';
import { GeolocationModule } from '../geolocation/geolocation.module';

@NgModule({
  declarations: [QuestionFormComponent, DynamicFormComponent,PasswordFieldComponent,EmailFieldComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    ItemModule,
    GeolocationModule
  ],
  exports: [QuestionFormComponent, DynamicFormComponent],
  providers: [QuestionControlService]
})
export class DynamicFormModule { }
