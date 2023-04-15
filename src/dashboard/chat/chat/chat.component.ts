import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';
import { ChatserviceService } from '../service/chatservice.service';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  img:boolean=false
  userChat:any[]=[]
  datarom:any[]=[]
  messages:any[]=[];
  photo:any[]=[]
  dataShow:any[]=[];
  message='';
  showMessage:any[]=[]
  returnData:any[]=[]
  constructor(
  
   
    private fb:FormBuilder,
    private serv:ChatserviceService , private toaster:ToastrService,
    private sppiner :NgxSpinnerService,private http:HttpClient,
    public matDialog: MatDialog) { }
    ngOnInit(): void {

this.getAllUsers()

      Pusher.logToConsole = true;

      var pusher = new Pusher('cbe947b09a127d1d6084', {
        cluster: 'mt1',

      });
      const channel = pusher.subscribe('new-message');
      channel.bind('Modules\\Chat\\Events\\NewMessage', (data:any) =>{
        console.log(data.message.message);
        
        return this.messages.push(data.message.message);

      });

  }


  channel(channel: any) {
    throw new Error('Method not implemented.');
  }



  submit(){
   return this.http.post('https://valucleaning.erp-everest.com/api/store-message',{
      room_id:1,
      message:this.message,
      // photo:'/C:/Users/Noha/OneDrive/Desktop/en.png',
      // token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ZhbHVjbGVhbmluZy5lcnAtZXZlcmVzdC5jb20vYXBpL0FkbWluL0xvZ2luIiwiaWF0IjoxNjgwOTI4MDM2LCJuYmYiOjE2ODA5MjgwMzYsImp0aSI6IkZXdVVQN0VTQzZGSjZBTVUiLCJzdWIiOiI2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.NAHFuRt_somSzZxa1BT1UVh_4LOaC2FyhnOgjD69iKg'
    }).subscribe(()=>this.message='')
  
  }
 
  select(event:any){
    this.message=event.target.value;
    // this.messages.push({message:this.message})
  }

  checkroom(id:any){
    this.serv.checkRoom(id).subscribe((data:any)=>{
   console.log(id);
   this.datarom=data.data
   console.log(this.datarom);
   

    })
  }

getAllUsers(){
  this.serv.getUsers().subscribe((data:any)=>{
  
    this.userChat=data.data

    
  })
}
}
