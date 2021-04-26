import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { DVDFormComponent } from './dvd-form/dvd-form.component';
import { DVDListComponent } from './dvd-list/dvd-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


const routes: Routes = [
  {
    path: '',
    component: DVDListComponent
  },
	{
    path: 'customer-list',
    component: CustomerListComponent
  },
  {
    path: 'dvd-form',
    component: DVDFormComponent
  },
  {
    path: 'customer-form',
    component: CustomerFormComponent
  },

  {
    path: 'category-form',
    component: CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
