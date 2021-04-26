import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  searchQuery: string;

  constructor(private customerService: CustomerService) { }

  async ngOnInit() {
    this.customers = await this.customerService.loadCustomers();
  }

  async search() {
    this.customers = await this.customerService.filterCustomers(this.searchQuery);
  }
	async deleteCustomer(id: number) {
    await this.customerService.delete(id);
    this.customers = await this.customerService.loadCustomers();
  }
}
