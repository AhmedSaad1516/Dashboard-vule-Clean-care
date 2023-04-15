import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  getAllOrder(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/order')
  }

  getOrderCanseled(){
    return this.http.get('https://valucleaning.erp-everest.com/api/admin/CansaledOrder')
  }

  deleteOrder(id:number){
    return this.http.delete('https://valucleaning.erp-everest.com/api/admin/delete/Order/' +id)
  }
  
}
