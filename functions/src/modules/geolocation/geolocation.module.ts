import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/AddressField/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrackComponent } from './components/track/track.component';
import { ShowTrackingComponent } from './components/show-tracking/show-tracking.component';
import { AgmCoreModule,AgmPolyline } from '@agm/core';




@NgModule({
  declarations: [AddressComponent,TrackComponent,ShowTrackingComponent],
  imports: [
    CommonModule,
    AgmCoreModule,
    ReactiveFormsModule,IonicModule.forRoot(),
  ],
  exports:[AddressComponent,TrackComponent,ShowTrackingComponent]
})
export class GeolocationModule { }
