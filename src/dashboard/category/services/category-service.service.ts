import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }

  getAllCategory(){
return this.http.get('https://valucleaning.erp-everest.com/api/admin/Category')
  }
 createCategory(model:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/admin/create/Category',model)
 }

 updateCategory(model:any , id:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/admin/update/Category/' +id ,model)
 }
  deleteCategory(id:any){
    return this.http.delete('https://valucleaning.erp-everest.com/api/admin/delete/Category/' +id)
  }
}
