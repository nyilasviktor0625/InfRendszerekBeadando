import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup = this.formBuilder.group({
    id: [],
    firstName: [''],
    lastName: [''],
    age: [0],
	ID_num: [0],
	zip_number:[0],
	city:[''],
	street:[''],
	house_num:[''],
  });

  successMessage: string;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  async createCustomer() {
    const customer = this.customerForm.value;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const customerAdded = await this.customerService.createCustomer(customer);
      this.successMessage = 'Customer added with id ' + customerAdded.id;
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }

}
