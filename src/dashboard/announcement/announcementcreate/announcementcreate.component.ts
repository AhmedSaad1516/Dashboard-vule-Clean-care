import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AnnouncementServieService } from '../services/announcement-servie.service';

@Component({
  selector: 'app-announcementcreate',
  templateUrl: './announcementcreate.component.html',
  styleUrls: ['./announcementcreate.component.css']
})
export class AnnouncementcreateComponent {
  announcementForm!:FormGroup
img:boolean=false
  notesForm: any;
  photoName=""
  url :any= "";


    constructor(
  

      private fb:FormBuilder,
      private serv:AnnouncementServieService , private toaster:ToastrService,
      private sppiner :NgxSpinnerService, public dialog: MatDialogRef<AnnouncementcreateComponent>,

      public matDialog: MatDialog) { }
      
  ngOnInit(): void {



    this.createForm()

  }
 

  createForm(){
    this.announcementForm=this.fb.group({
      title:['',[Validators.required]],
      photo:['',[Validators.required]]
  
    })

    
  }
  selectPhoto(event:any){
    this.photoName=event.target.value
    this.announcementForm.get('photo')?.setValue(event.target.files[0])

if(event.target.files[0]){
 let reader = new FileReader();
 reader.readAsDataURL(event.target.files[0])
 reader.onload = (event:any)=>{
  this.url = event.target.result
 } 
}
  }


createannouncement(){
  let model=this.creatFoemData()
  this.serv.create(model).subscribe((data:any)=>{
    this.toaster.success('It has been added  The Worker successfully', '', {
      disableTimeOut:false,
     titleClass:"toastr_title",
     messageClass:"toastr_message",
     timeOut:1000,
     onActivateTick:false,
     toastClass:'ngx-toastr'	,
     progressBar	:true,
     easing:'ease-in',
     enableHtml	:true,
     newestOnTop:true,
     tapToDismiss:true,
     positionClass:'toast-top-right',
     closeButton:true,
  
    })
    // this.sppiner.hide()
  this.img=false
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.dialog.close(true)
  } , error =>{

    this.img=false
    this.toaster.error(error.error.message, '', {
    
      
      disableTimeOut:false,
     titleClass:"toastr_title",
     messageClass:"toastr_message",
     timeOut:1000,
     onActivateTick:false,
  
     toastClass:'ngx-toastr'	,
     progressBar	:true,
     easing:'ease-in',
     enableHtml	:true,
     newestOnTop:true,
     tapToDismiss:true,
     positionClass:'toast-top-right',
     closeButton:true,
  
    })
   
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
  
  
    })
}
  creatFoemData(){
    let newdata = new FormData()
    // newdata.append('worker_id',this.workers)
    Object.entries(this.announcementForm.value).forEach(([key , value]:any)=>{
      newdata.append(key, value)
    })
    return newdata
  }
  close(){
    this.dialog.close()
  }
}
