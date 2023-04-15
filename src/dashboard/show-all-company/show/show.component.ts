import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/dashboard/users/services/user-service.service';
import { AllCompanyServicesService } from '../services/all-company-services.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  img:boolean=false
  company:any[]=[]
  constructor(private serv:AllCompanyServicesService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router) { }
    ngOnInit(): void {
      this.getAllCompany()
      }
    
getAllCompany(){
  this.serv.getAllCompanyData().subscribe((data:any)=>{
this.company=data.data

  })
}

active(id:number){
  this.serv.getSta(id).subscribe((data:any)=>{
console.log(data);

this.toster.success('Status changed successfully','',{
  timeOut:1000,
  progressBar:true,
  closeButton:true
})
let audio = new Audio
audio.src='../../../assets/notification-sound/login.wav'
audio.load()
audio.play()


// this.getAllCompany()

})
 }
}
