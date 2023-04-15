import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterservicesService {

  constructor(private http:HttpClient) { }

  createFooter(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/admin/footer',model)
  }
  getDataFooter(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/footer')
  }
}
