import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient){}
getAllEmployee(){
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/all-employee')
}

  
}
