import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ChatserviceService } from '../service/chatservice.service';

@Component({
  selector: 'app-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: ['./show-chat.component.css']
})
export class ShowChatComponent {
  id:any
  constructor(
  private fb:FormBuilder,private router:ActivatedRoute,
  private serv:ChatserviceService , private toaster:ToastrService,
  private sppiner :NgxSpinnerService,private http:HttpClient,
  public matDialog: MatDialog) { 
    this.id=this.router.snapshot.paramMap.get('id')
  }
  
  ngOnInit(): void {
  
  }

  checkroom(id:any){
    this.serv.checkRoom(id).subscribe((data:any)=>{
   console.log(id);

    })
  }
}


