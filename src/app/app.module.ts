import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemModule } from './modules/item/item.module';
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module';
import { HelpersModule } from './modules/helpers/helpers.module';
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
import { NewCustomerPage } from './pages/customers/create/new-customer/new-customer.page';
import { UpdateCustomerPage } from './pages/customers/edit/update-customer/update-customer.page';
import { ApplyFunction2WeelsPage } from './pages/modals/apply-function2-weels/apply-function2-weels.page';
import { ApplyFunction2WeelsComponent } from './components/apply-function2-weels/apply-function2-weels.component';
import { ScatterComponent } from './components/scatter/scatter.component';
import { BarComponent } from './components/bar/bar.component';
import { BrowsingPage } from './pages/extractions/browsing/browsing.page';
import { BrowseExtractionsComponent } from './components/browse-extractions/browse-extractions.component';
import { MagicComponent } from './components/magic/magic.component';
import { MagicPage } from './pages/magic/magic.page';
import { IntervalsD3Component } from './components/intervals-d3/intervals-d3.component';
import { IntervalsPage } from './pages/intervals/intervals.page';
import { SuggestedNumbersComponent } from './components/suggested-numbers/suggested-numbers.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectorItemsPage,
    EditUserPage,
    ProfilePage,
    ExtractionComponent,
    FolderPage,
    NewCustomerPage,
    UpdateCustomerPage,
    NumeroEstrattoComponent,
    WeelsViewerComponent,
    TrailingZeroPipe,
    SameLengthStringPipe,
    ApplyFunction2WeelsPage,
    ApplyFunction2WeelsComponent,
    ScatterComponent,
    BarComponent,
    BrowsingPage,
    BrowseExtractionsComponent,
    MagicComponent,
    MagicPage,
    IntervalsD3Component,
    IntervalsPage,
    SuggestedNumbersComponent
    
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
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
