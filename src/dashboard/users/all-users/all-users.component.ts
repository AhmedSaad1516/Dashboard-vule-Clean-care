import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SendComponent } from 'src/dashboard/send-massage/send/send.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  filter:any = []
  timeOutId:any
  img:boolean=false
page:any=1
total:any

  users:any[]=[]
  constructor(private serv:UserServiceService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,) { }

  ngOnInit(): void {
  this.getAllUser()
  }

 // Start Get All Dtat Users
  getAllUser(){
    this.img=true
    this.serv.getAllUser(this.filter).subscribe((data:any)=>{
this.users=data.user
this.img=false
    }, error =>{
      this.rotue.navigateByUrl('/login')
      localStorage.removeItem('token')
      this.toster.error('token is expired')
    })
  }
 // End Get All Dtat Users

 // Start Function Search Users
  search(event:any){

    this.filter['q'] = event.value
    clearTimeout(this.timeOutId)
   this.timeOutId = setTimeout(() => {
   

      this.getAllUser()
 
    }, 1000);

  
  }
   // End Function Search Users
   sendMassage(element:any){
    const dialogRef = this.dialog.open(SendComponent, {
      width:'750px',
      height:'85%',
      disableClose : true,
      data:element
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result == true){
            this.getAllUser()
            } 
        });
   }
  nav(event:any){
this.page = event
  }
}
