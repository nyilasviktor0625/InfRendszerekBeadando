import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DVDListComponent } from './dvd-list/dvd-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DVDComponent } from './dvd-list/dvd/dvd.component';
import { CustomerComponent } from './customer-list/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DVDFormComponent } from './dvd-form/dvd-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DVDListComponent,
	CustomerListComponent,
    DVDComponent,
	CustomerComponent,
    DVDFormComponent,
    CustomerFormComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
