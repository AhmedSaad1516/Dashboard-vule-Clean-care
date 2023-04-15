import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private http:HttpClient){}
createnotes(model:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/store-type',model)
}
getAlltypeExpense(){
  return this.http.get('https://valucleaning.erp-everest.com/api/get-type')
}
deletetypes(id:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/expenses/delete-type' , id)
}
updatetype(model:any , id:any){
 return this.http.post('https://valucleaning.erp-everest.com/api/expenses/update-type/'+id , model)
}
}
