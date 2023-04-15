import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordServiceService {

  constructor(private http:HttpClient) { }

  forgetpasswordAdmin(model:any){
return this.http.post('https://valucleaning.erp-everest.com/api/change/password',model)
  }
}
