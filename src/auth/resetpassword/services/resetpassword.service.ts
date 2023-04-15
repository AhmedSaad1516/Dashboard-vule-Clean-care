import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private http:HttpClient) { }

  resetpassword(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/reset/password',model)
  }
}
