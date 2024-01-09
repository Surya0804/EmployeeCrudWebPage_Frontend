import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-landing-page',
  templateUrl: './employee-landing-page.component.html',
  styleUrls: ['./employee-landing-page.component.css']
})
export class EmployeeLandingPageComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }



}
