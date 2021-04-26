import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { Customer } from '../models/customer';
import { CategoryService } from '../services/category.service';
import { DVDService } from '../services/dvd.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.css']
})
export class DVDFormComponent implements OnInit {

  dvdForm: FormGroup = this.formBuilder.group({
    id: [],
    title: [''],
    description: [''],
   
    imgUrl: [ 'https://matchory.com/assets/corals/images/default_product_image.png', Validators.pattern(/^http/) ],
    
    user: [],
    categories: [[]]
  });

  customers: Customer[];

  categories: Category[];

  constructor(
    private dvdService: DVDService,
    private customerService: CustomerService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get id() {
    return this.dvdForm.get('id');
  }

  

  get imgUrl() {
    return this.dvdForm.get('imgUrl');
  }

  async ngOnInit() {
    this.customers = await this.customerService.getCustomers();
    this.categories = await this.categoryService.getAll();

    const id = this.activatedRoute.snapshot.queryParams.id;

    if (id) {
      const dvd = await this.dvdService.getDVDById(id);
      this.dvdForm.setValue(dvd);
    }
  }

  addDVD() {
    const dvd = this.dvdForm.value;
    this.dvdService.addDVD(dvd);
    this.router.navigateByUrl('/');
  }

  compareCustomers(customer1: Customer, customer2: Customer): boolean {
    return customer1 && customer2 && customer1.id === customer2.id;
  }

  compareCategories(category1: Category, category2: Category): boolean {
    return category1 && category2 && category1.id === category2.id;
  }

}
