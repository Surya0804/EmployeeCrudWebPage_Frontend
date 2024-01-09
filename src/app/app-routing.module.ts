import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLandingPageComponent } from './components/employee-landing-page/employee-landing-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
  {path:'',component:EmployeeLandingPageComponent,pathMatch:"full"},
  {path:"add-employee",component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
