import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  
  getAllUser(filter:any){
    let params = new HttpParams()
    if (filter.q){
      params = params.append('q', filter.q)
  
    }
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/all-users' ,{params})
  }

  getDetailsUser(id:any){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/show-user/'+id)

  }
}
