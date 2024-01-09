import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  private getAllStatesURL="http://localhost:2001/getallstates";
  private getAllCitiesURL="http://localhost:2001/getallcities";
  private addEmployeeURL="http://localhost:2001/addemployee"

  // get all states
  public getAllStates(): Observable<Object>
  {
    return this.httpClient.get<Object>(`${this.getAllStatesURL}`);
  }
  
  //get all cities
  public getAllCities():Observable<any>
  {
    return this.httpClient.get<any>(`${this.getAllCitiesURL}`);
  }

  //add emoployee data to db
  public addEmployeeData(employee:Employee):Observable<Object>
  {
  return this.httpClient.post(`${this.addEmployeeURL}`,employee,{observe:'response',responseType:'text'});
  }

}
