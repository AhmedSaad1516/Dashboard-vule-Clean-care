import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubServicesServicesService {
lang:any
  constructor(private http:HttpClient){}

  getAllSubService(lang:any){
    let params = new HttpParams()
    if ('lang' in localStorage){
      this.lang=localStorage.getItem('lang')
     params = params.append('lang', this.lang)
   
    }
      return this.http.get('https://valucleaning.erp-everest.com/api/admin/SubService' , {params})
    }

    createSubServices(model:any){
      return this.http.post('https://valucleaning.erp-everest.com/api/admin/create/SubService',model)
    }


    deleteSubService(id:any){
      return this.http.delete('https://valucleaning.erp-everest.com/api/admin/delete/SubService/' + id)
    }
    
updateSubService(model:any , id:any ){
  return this.http.post('https://valucleaning.erp-everest.com/api/admin/update/SubService/' +id , model)
}
getDetailsSubServices(id:any , lang:any){
  let params = new HttpParams()
  if ('lang' in localStorage){
    this.lang=localStorage.getItem('lang')
   params = params.append('lang', this.lang)

  }
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/show/SubService/'+id , {params})
}
  }

