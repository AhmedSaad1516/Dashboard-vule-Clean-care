import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http:HttpClient) { }
  getAllDataHome(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/home')
  }
}
