import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminloginService } from '../services/adminlogin.service';
import { RoleServiceService } from 'src/dashboard/roles/service/role-service.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  LoginForm!:FormGroup
  showError:boolean=false
  img:boolean=false
  constructor(private fb :FormBuilder,private serv:AdminloginService,private servv:RoleServiceService,
      private toaster:ToastrService, private rouer:Router,
      private spinner:NgxSpinnerService) { } 

      ngOnInit(): void {

        this.creatForm()
      }
      creatForm(){
        this.LoginForm=this.fb.group({
          email:['',[Validators.required,Validators.email]],
          password:['',[Validators.required]]
        })
        
      }

      
login(){

  // this.spinner.show()
  this.img=true
   this.serv.loginAdmin(this.LoginForm.value).subscribe((data:any)=>{
     localStorage.setItem('token' , data.token)
     this.servv.roleLogin.next(data)
     this.servv.roleLogin1.next(data)
     this.toaster.success('Hello world!', 'Toastr fun!', {
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
     this.img=false
 
     this.rouer.navigateByUrl('/home')
     let audio = new Audio
     audio.src='../../../assets/notification-sound/login.wav'
     audio.load()
     audio.play()
   }, error =>{
     this.showError=true
     this.toaster.error('Email Or Password Is Not Valid', '', {
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
    //  this.spinner.hide()
     this.img=false
     })
    
       }  
}
