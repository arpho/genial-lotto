export class TrackingAction{
  trackId
  successCallack:(pos)=>void
  errorCalback:(error)=> void
  activationCallback:()=> void
  deactivationCallback:()=> void

  constructor(success:(pos)=> void,// function called on succesfull watchposition
  error:(error)=> void,// function called on excedption watchposition
  activation:()=>void,// function to call in activation
  deactivation:()=> void // function to call on deactivation
  ){
    this.successCallack= success
    this.errorCalback = error
    this.activationCallback = activation
    this.deactivationCallback = deactivation
  }




  track(){
    console.log('tracking')
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  
    let success =this.successCallack
    let error = this.errorCalback
    this.trackId = navigator.geolocation.watchPosition(success,error,options)
    this.activationCallback()
  }

  stopTracking(){
    navigator.geolocation.clearWatch(this.trackId)
    this.deactivationCallback()
  }
}