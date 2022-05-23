import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemModule } from 'src/app/modules/item/item.module';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';
import { HelpersModule } from 'src/app/modules/helpers/helpers.module';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      DynamicFormModule,
    ItemModule,
    HelpersModule,
    UserModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
