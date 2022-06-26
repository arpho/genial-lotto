import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { EmailAuthCredential } from 'firebase/auth';
import { configs } from 'src/app/configs/configs';
import { Customer } from 'src/app/models/Customer';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { EmailQuestion } from 'src/app/modules/dynamic-form/models/question-email';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { MyToastService } from 'src/app/modules/helpers/services/toaster/my-toast-service.service';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';
import { CustomersService } from 'src/app/services/customers/customers-service.service';

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

async submit(ev){
  console.log("submitting form",ev,this.customer)
this.customer.load(ev)
try{
  this.service.updateItem(this.customer)
 const result = await this.service.addCustomClaim({
    email:this.customer.email,
  claims:{
    enabled:this.customer.enabled,
    level:this.customer.level,
    userType:this.customer.userType
  }
})
console.log("done",result)
this.toaster.presentToast("user updated")
this.dismiss(this.customer)
}
catch(error){
  console.log(error)
  this.toaster.presentToast("ho riscontrato dei problemi")
  this.dismiss()
}
}

  
dismiss(customer?:Customer){
  this.modalCtrl.dismiss(customer)
}

  constructor(public navParams:NavParams,
    public modalCtrl:ModalController,
    public service:CustomersService,
    public toaster:MyToastService) {
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
  new DropdownQuestion({key:"level",
  label:"privilegi utente",
  options:configs.accessLevel,value:this.customer.level
}),
new SwitchQuestion({
  key:"enabled",
  label:"abilitato",
  value:this.customer.enabled,
  iconTrue:"checkmark-circle",
  iconFalse:"close-circle",
  labelFalse:"utente non abilitato",
  labelTrue:"utente abilitato"
})
]
  }

}
