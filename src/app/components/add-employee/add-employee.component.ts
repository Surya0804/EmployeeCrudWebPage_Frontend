import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  state:any;
  city:any;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService) { 

  }
  public onStateChange(e:any)
  {
   this.getAllCities(e.target.value);
  }
  ngOnInit(): void {
    this.getAllStates();

  }

  public getAllStates()
  {
    return this.employeeService.getAllStates().subscribe((data:any)=>{
      this.state=data;
    })
  }

  public getAllCities(id:any)
  {
      this.employeeService.getAllCities().subscribe(data=>{   
        this.city=data.filter((ci:any)=>ci.state_id==id);
      })
  }
  submitEmployee()
  {
      this.employeeService.addEmployeeData(this.employee).subscribe((response:any)=>{
          alert(response.body);
          window.location.reload();      
      }
      )
    
  }


}
