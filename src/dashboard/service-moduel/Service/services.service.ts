import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
lang:any
  constructor(private http:HttpClient) { }

getAllService(lang:any ,filter:any){
  let params = new HttpParams()
  if ('lang' in localStorage){
    this.lang=localStorage.getItem('lang')
   params = params.append('lang', this.lang)
   if (filter.q){
    params = params.append('q', filter.q)

  }
  }
 return this.http.get('https://valucleaning.erp-everest.com/api/admin/service' , {params})
}

getSta( id:number){
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/Active/service/' +id )

}

CreateService(model:any){
 return this.http.post('https://valucleaning.erp-everest.com/api/admin/create/service', model)
}

delete(id:number){
  return this.http.delete('https://valucleaning.erp-everest.com/api/admin/delete/service/' +id)
}

update(model:any , id:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/admin/update/service/' +id , model)
}

getSHow(id:any ){
 
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/show/service/'+id )
}


}
