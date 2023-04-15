import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { RoleServiceService } from '../../service/role-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
roleForm!:FormGroup
img:boolean=false
showFormDelete:boolean=false
permission:any[]=[]
  constructor(

   
    private fb:FormBuilder,
    private serv:RoleServiceService , private toaster:ToastrService,
    private sppiner :NgxSpinnerService,
    // public dialog: MatDialogRef<AddworkersComponent>,
    public matDialog: MatDialog) { }
    
ngOnInit(): void {

  this.createForm()
  this.getAllpermission()

}
createForm(){
  this.roleForm=this.fb.group({
    name:['',Validators.required],
    permission:['',Validators.required]
  })
}

addRole(){
  this.img=true

 this.serv.addRoles(this.roleForm.value).subscribe((data:any)=>{
  this.toaster.success('It was added roles successfully','',{
    timeOut:1000,
    closeButton:true,
    progressBar:true
  })
  let audio = new Audio
  audio.src='../../../assets/notification-sound/login.wav'
  audio.load()
  audio.play()
  this.img=false
  this.roleForm.reset()
 } , error =>{
  this.img=false
  let audio = new Audio
  audio.src='../../../assets/notification-sound/login.wav'
  audio.load()
  audio.play()
  this.roleForm.reset()
 })
}


getAllpermission(){
  this.serv.getPermission().subscribe((data:any)=>{
this.permission=data.permission

  })
}

}
