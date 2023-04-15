import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  createAbout(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/admin/about',model)
  }
  getAllData(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/about')

  }
}
