import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  async getCustomers() {
    return this.http.get<Customer[]>('/api/customers').toPromise();
  }

  async createCustomer(customer: Customer) {
    return this.http.post<Customer>('/api/customers', customer).toPromise();
  }
    async loadCustomers() {
    return this.http.get<Customer[]>('/api/customers').toPromise();
  }

  async filterCustomers(search: string) {
    return this.http.get<Customer[]>('/api/customers', {
      params: { search }
    }).toPromise();
  }

   delete(id: number) {
    return this.http.delete('/api/customers/' + id).toPromise();
  }
}
