import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { EmailAuthCredential } from 'firebase/auth';
import { configs } from 'src/app/configs/configs';
import { Customer } from 'src/app/models/Customer';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { EmailQuestion } from 'src/app/modules/dynamic-form/models/question-email';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.page.html',
  styleUrls: ['./update-customer.page.scss'],
})


export class UpdateCustomerPage implements OnInit {
  formFields: any[]
customer= new Customer

filter(ev){
  console.log("typing",ev)
}

submit(ev){
  console.log("submitting form",ev)
this.customer.load(ev)
  console.log("submitting")
}
  constructor(public navParams:NavParams) {
   }

  ngOnInit() {
    this.customer.load(this.navParams.get("item"))
    
    console.log("customer",this.customer)
    this.formFields= [
      new TextboxQuestion({
      key:"firstName",
      label:"nome",
      required:true,
    value:this.customer.firstName}),
  new TextboxQuestion({
    key:"lastName",
    label:"cognome",
    value:this.customer.lastName,
    required:true
  }),
    new SwitchQuestion({key:'enabled',label:'Utente abilitato',value:this.customer.enabled,iconTrue:'checkmark',
  iconFalse:'close',labelTrue:'utente abilitato',labelFalse:'utente non abilitato'}),
  new DropdownQuestion({key:"userType",
  label:"privilegi utente",
  options:configs.accessLevel,value:this.customer.role
})]
  }

}
