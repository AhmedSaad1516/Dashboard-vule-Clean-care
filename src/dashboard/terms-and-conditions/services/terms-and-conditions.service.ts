import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermsAndConditionsService {

  constructor(private http:HttpClient) { }
  createtermsandconditions(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/admin/terms-and-conditions',model)
  }

gettermsconditions(){
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/terms-and-conditions')
}

delete(id:any){
  return this.http.delete('https://valucleaning.erp-everest.com/api/admin/terms-and-conditions/' + id)

}
}

