import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeLandingPageComponent } from './components/employee-landing-page/employee-landing-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeLandingPageComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
