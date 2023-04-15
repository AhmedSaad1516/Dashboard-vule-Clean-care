import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementServieService {

  constructor(private http:HttpClient){}
  create(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/admin/create/announcement',model)
  }

  getAll(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/announcement')
  }
}
