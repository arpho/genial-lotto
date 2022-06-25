import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers/customers-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(service:CustomersService) { }

  ngOnInit() {
  }

}
