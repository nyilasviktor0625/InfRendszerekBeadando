import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
	

  @Input()
  customer!: Customer;
  customers:Customer[];

  constructor(private router: Router,private customerService: CustomerService) { }
  

  ngOnInit(): void {
  }

  navigateToCustomerForm(id) {
    this.router.navigate([ '/customer-form' ], {
      queryParams: {
        id: id
      }
    });
  }
 async deleteCustomer(id: number) {
    await this.customerService.delete(id);
    this.customers = await this.customerService.loadCustomers();
  }

 


}
