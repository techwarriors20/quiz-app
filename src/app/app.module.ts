import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavComponent } from './_layout.admin/mainnav/mainnav.component';
import { NavbarComponent } from './_layout.admin/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './_layout.admin/footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GeneratequizComponent } from './category/generatequiz/generatequiz.component';
import { EmployeeComponent } from './employee/employee.component';
import { CnavbarComponent } from './_layout.client/cnavbar/cnavbar.component';
import { ClientcategoryComponent } from './employee/clientcategory/clientcategory.component';
import { AssignmentComponent } from './employee/assignment/assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    CategoryComponent,
    GeneratequizComponent,
    EmployeeComponent,
    CnavbarComponent,
    ClientcategoryComponent,
    AssignmentComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
