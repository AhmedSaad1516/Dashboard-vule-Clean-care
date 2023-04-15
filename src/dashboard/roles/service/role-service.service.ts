import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  roleLogin = new Subject()
  roleLogin1=new Subject()
  constructor(private http:HttpClient) { }

  addRoles(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/admin/roles',model)
  }
  getPermission(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/permission')
  }
  getAllRole(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/roles')
  }
  AddEmployee(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/admin/users', model)
  }
  
  logout(){
    return this.http.get('https://valucleaning.erp-everest.com/api/logout')
  }
}
