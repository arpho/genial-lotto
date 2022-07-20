import { Component, OnInit } from '@angular/core';
import {db} from "./../../functions/src/configs/firebase"
import {initializeApp} from "firebase/app"
import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";
import { configs } from './configs/credentials';
import { Router } from '@angular/router';
import { MessageBrokerService } from './modules/helpers/services/messages/message-broker.service';
import { Piu2meno90 } from './business/piu2meno90';
import { Figura } from './business/figura';
import { Vertibile } from './business/vertibile';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{
  transformationIndex=-1

onOwnClick= (index:number,url?:string)=>{
  const  out= ()=>{
    if(index!=-1){
    this.transformationIndex= index
    this.messages.publish("selectedFunction",this.appPages[index].function)}
    else{
      this.router.navigate([url])
    }
    
  }
  return out
 }
 isSelected(index){
   return (index==this.transformationIndex)?"selected":"unselected"
 }
  public appPages:any[] = []
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router:Router,
    public menu:MenuController,
    
    public messages:MessageBrokerService) {
      messages.addBroker("selectedFunction")
    }
  ngOnInit(): void {
    this.messages.subscribeTo("ambate",(data=>{
      if(data){
this.menu.enable(true,"main-content")
this.menu.open("main-content")
      }
    }))
    const app = initializeApp(configs.firebase)
    const auth = getAuth()
    
    onAuthStateChanged(auth,async (user)=>{
      if( user){
      const token = await user.getIdTokenResult(true).then(result=>{
        if(Number(result.claims["level"])<=2){
          this.appPages.push( { title: "utenti", url: "/customers", icon: "people", onClick:this.onOwnClick(-1,"/customers") },
         )
         if(!result.claims["enabled"]){
          alert("il suo account non è abilitato, se il problema persiste contatti l'amministratore")
         }
         else{

          this.appPages = [
            ...this.appPages,
            { title: 'Algoritmo Genial',
            src:"/assets/icon/icons/genial.svg",
             url: '/magic', icon: 'mail',
             onClick:this.onOwnClick(-1,"/magic"),
            function:new Piu2meno90()},
            { title: 'Figura',
             url: '/folder/Outbox',
              icon: 'paper-plane',
               onClick:this.onOwnClick(1),
               function:new Figura() },
            { title: 'Vertibili',
             url: '/folder/Favorites',
              src:"/assets/icon/vertibile2.svg",
               onClick:this.onOwnClick(2),
               function:new Vertibile() },
               {title:"Intervalli",
              url:"intervals",
              icon:"stats-chart",
              onClick:this.onOwnClick(-1,"/intervals")
              }
          
           
          ];
         }
        }
        console.log("claims",result.claims)
        })

      
    }else{
      this.router.navigate(["/users/login"])
    }
    }
    
    )
  }
}
