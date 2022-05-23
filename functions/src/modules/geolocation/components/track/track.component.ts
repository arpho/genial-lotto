import { Component, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
changeDetection:ChangeDetectionStrategy.OnPush
})
export class TrackComponent implements OnInit {
trackingState = false
trackChange(data){
	console.log('tracking on',this.trackingState)
}

  constructor() { }
  @Output() latLong:EventEmitter<{lat:number,lng:number}> = new EventEmitter()

  track(){
	  console.log('tracking')
	  let options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	  };

	  let success =(pos)=>{
		  var crd = pos.coords;
		  console.log("actual pos",pos)
		  this.latLong.emit({lat:pos.coords.latitude,lng:pos.coords.longitude})
	  }
	  let error = (error)=>{
		  console.error(error)
	  }
	  navigator.geolocation.watchPosition(success,error,options)
  }

  tracking(){
	  console.log('click')
  }

  triggeredTracking(ev){
	  console.log("triggered",ev)
  }


  ngOnInit() {}

}
