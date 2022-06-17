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
import { SelectorItemsPage } from './modules/item/pages/selector-items/selector-items.page';
import { EditUserPage } from './modules/user/pages/edit-user/edit-user.page';
import { ProfilePage } from './modules/user/pages/profile/profile.page';
import { ExtractionComponent } from './components/extraction/extraction.component';
import { FolderPage } from './folder/folder.page';
import { NumeroEstrattoComponent } from './components/numero-estratto/numero-estratto.component';
import { WeelsViewerComponent } from './components/weels-viewer/weels-viewer.component';
import { TrailingZeroPipe } from './pipes/trailing-zero.pipe';
import { SameLengthStringPipe } from './pipes/same-length-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectorItemsPage,
    EditUserPage,
    ProfilePage,
    ExtractionComponent,
    FolderPage,
    NumeroEstrattoComponent,
    WeelsViewerComponent,
    TrailingZeroPipe,
    SameLengthStringPipe
   ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    DynamicFormModule,
    ItemModule,
    HelpersModule,
    UserModule,
    
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports:[
  ]
})
export class AppModule {}
