import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllCompanyServicesService {

  constructor(private http:HttpClient) { }
  getAllCompanyData(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/allCompany')
  }

  getSta(id:any){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/approvedCompany/' +id)

  }
}
