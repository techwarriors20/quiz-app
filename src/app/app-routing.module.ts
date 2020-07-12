import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneratequizComponent } from './category/generatequiz/generatequiz.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientcategoryComponent } from './employee/clientcategory/clientcategory.component';
import { AssignmentComponent } from './employee/assignment/assignment.component';



const routes: Routes = [
 // { path: "" , redirectTo:'/home', pathMatch :"full"},
  { path: "", component: DashboardComponent},
  { path: "category/:id", component: CategoryComponent},
  {path:"generatequiz",component:GeneratequizComponent},
  {path :"client", component:EmployeeComponent},
  {path :"clientcategory/:id",component:ClientcategoryComponent},
  {path:"assignment/:id",component:AssignmentComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
