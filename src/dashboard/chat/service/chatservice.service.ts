import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor(  private http:HttpClient) { }
  getUsers(){
    return this.http.get('https://valucleaning.erp-everest.com/api/all-room-message')
  }
  checkRoom(id:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/room-messages' , id)
  }

}
