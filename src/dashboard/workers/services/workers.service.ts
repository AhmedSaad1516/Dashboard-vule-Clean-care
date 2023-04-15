import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable,OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  lang:any
constructor(private http:HttpClient){}
      
getWorker(filter:any){
  let params = new HttpParams()
  if (filter.q){
    params = params.append('q', filter.q)

  }
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/worker' , {params})
}


createWorker(model:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/admin/create/worker',model)
}

 
delete(id:any){
  return this.http.delete('https://valucleaning.erp-everest.com/api/admin/delete/worker/' + id)
}

update(model:any , id:any ){
  return this.http.post('https://valucleaning.erp-everest.com/api/admin/update/worker/' +id , model)
}


getDetailsWorker(id:any,lang:any){
  let params = new HttpParams()
  if ('lang' in localStorage){
    this.lang=localStorage.getItem('lang')
   params = params.append('lang', this.lang)
 
  }
  return this.http.get('https://valucleaning.erp-everest.com/api/admin/show/worker/'+id ,{params})

}


}
