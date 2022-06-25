import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers/customers-service.service';
import { NewCustomerPage } from '../../create/new-customer/new-customer.page';
import { UpdateCustomerPage } from '../../edit/update-customer/update-customer.page';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  editModalPage = UpdateCustomerPage
  createModalPage = NewCustomerPage

  filterFunction(customer:Customer){
    return true
  }

  constructor(public service:CustomersService) { }

  ngOnInit() {
  }

}
