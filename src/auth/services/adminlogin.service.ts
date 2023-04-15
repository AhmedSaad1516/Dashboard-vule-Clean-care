import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }

  loginAdmin(model:any) {
    return this.http.post('https://valucleaning.erp-everest.com/api/Admin/Login',model)
   
}

showAdmin(){
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/Admin/profile')
}

updateAdmin(model:any ){
  return this.http.post('https://valucleaning.erp-everest.com/api/admin/update/profile',model)
}

}
