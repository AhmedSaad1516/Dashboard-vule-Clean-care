import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodepasswordService {

  constructor(private http:HttpClient) { }

  checkCode(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/forgot/check-code',model)
  }
}
