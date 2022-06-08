import { Component, OnInit } from '@angular/core';
import {db} from "./../../functions/src/configs/firebase"
import {initializeApp} from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { configs } from './configs/credentials';
import { Router } from '@angular/router';
import { MessageBrokerService } from './modules/helpers/services/messages/message-broker.service';
import { Piu2meno90 } from './business/piu2meno90';
import { Figura } from './business/figura';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{
  transformationIndex=-1

onOwnClick= (index:number)=>{
  const  out= ()=>{
    this.transformationIndex= index
    this.messages.publish("selectedFunction",this.appPages[index].function)
    
  }
  return out
 }
 isSelected(index){
   return (index==this.transformationIndex)?"selected":"unselected"
 }
  public appPages = [
    { title: '+2-90', url: '/folder/Inbox', icon: 'mail',onClick:this.onOwnClick(0),function:new Piu2meno90()},
    { title: 'figura', url: '/folder/Outbox', icon: 'paper-plane', onClick:this.onOwnClick(1),function:new Figura() },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart', onClick:this.onOwnClick(2) },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive', onClick:this.onOwnClick(3) },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash', onClick:this.onOwnClick(4) },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning', onClick:this.onOwnClick(5) },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router:Router,
    public messages:MessageBrokerService) {
      messages.addBroker("selectedFunction")
    }
  ngOnInit(): void {
    const app = initializeApp(configs.firebase)
    const auth = getAuth()
    onAuthStateChanged(auth,async (user)=>{
      if( user){
      const token = await user.getIdTokenResult(true)
		  console.log("user ok è",user)
		  console.log("token.claims",token.claims)
    }else{
      this.router.navigate(["/users/login"])
    }
    }
    
    )
  }
}
