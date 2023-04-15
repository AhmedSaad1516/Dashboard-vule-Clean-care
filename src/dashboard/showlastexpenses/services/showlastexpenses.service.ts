import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowlastexpensesService {

  constructor(private http:HttpClient) { }
  create(model:any){
return this.http.post('https://valucleaning.erp-everest.com/api/expenses/store-expense',model)
  }
}
