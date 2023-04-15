import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import { ToastrService } from 'ngx-toastr';
import { AdminloginService } from 'src/auth/services/adminlogin.service';
// import Pusher from 'pusher-js';

import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';
import { RoleServiceService } from '../roles/service/role-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // isSignedIn!: boolean;
admin:any=''
show:boolean=true
showw:boolean=false
bbb:boolean=false
nav:boolean=true
vv:boolean=true
v:boolean=false

lang:any ="en"

ul:boolean=true
userChat:any[]=[]
notify:any=[];
notifyarray:any[]=[]
counter:any=0
dataShow:any[]=[];
message='';
roleLogin:any = null
roleLogin1:any= null
  constructor(private router:Router , private toster:ToastrService,private servv:RoleServiceService,
    private serv:AdminloginService , private translate:TranslateService) {
      this.lang = this.translate.currentLang
     }
  ngOnInit(): void {

    this.servv.roleLogin.subscribe((data:any)=>{
      if(data.permission='role-list' ){
        this.roleLogin=data
        console.log(this.roleLogin);
        
      }
      if(data.permission='role-create'){
        this.roleLogin1=data
      }
      
      
  
      console.log(this.roleLogin);
      
    })
    // console.log(this.roleLogin);
    
  
    this.getPro()
    Pusher.logToConsole = true;

    var pusher = new Pusher('cbe947b09a127d1d6084', {
      cluster: 'mt1',

    });
    const channel = pusher.subscribe('order-created');
    channel.bind('order-created', (data:any) =>{
     
      if(JSON.parse(localStorage.getItem('notifications')!)){
        this.counter=JSON.parse(localStorage.getItem('notifications')!).length
        this.notifyarray=JSON.parse(localStorage.getItem('notifications')!)
        console.log(this.counter);
        
        this.notifyarray[this.counter++]=data.message

      }
    
      // this.notify.push(data.message)
      console.log(this.notifyarray);
      
      localStorage.setItem('notifications' ,JSON.stringify(this.notifyarray))
   
      return this.notifyarray
    

    });
    const channell = pusher.subscribe('new-company');
    channell.bind('new-company', (data:any) =>{
      let audio= new Audio()
      audio.src="../../../../assets/notification-sound/notification-sound-7062 (1).mp3"
      audio.load()
      audio.play()

      if(JSON.parse(localStorage.getItem('notifications')!)){
        this.counter=JSON.parse(localStorage.getItem('notifications')!).length
        this.notifyarray=JSON.parse(localStorage.getItem('notifications')!)
        console.log(this.counter);
        
        this.notifyarray[this.counter++]=data.message
        
      }
      this.notifyarray[this.counter++]=data.message

      // this.notify.push(data.message)
      console.log(this.notifyarray);
      
      localStorage.setItem('notifications' ,JSON.stringify(this.notifyarray))
  
      return this.notifyarray

    
  });

  // Define your notification pusher data
  const notificationPusherData = {
    title: 'New Notification',
    message: 'You have a new notification!'
  };
  
  // Write the data to a file
  



    // localStorage.setItem('notification', (this.notify))
  // console.log(this.notify);
  
    this.notifyarray =JSON.parse(localStorage.getItem('notifications')!);
    console.log(this.notifyarray);
      }

b(){
  this.vv=false

}
bb(){
  this.show=false
  this.showw=true
this.vv=true
this.v=false
}
bbbb(){
  this.show=true
  this.showw=false
this.vv=false
this.v=false
}
    getPro(){
      this.serv.showAdmin().subscribe((data:any)=>{
    this.admin = data.data
  
      })
    }
  logoutt(){
    
this.roleLogin=null
this.roleLogin1=null
      // this.servv.roleLogin.next(data)
      // this.servv.roleLogin1.next(data)
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
    // this.servv.roleLogin.next(data)
    this.toster.success('Successfully exited',"", {
      disableTimeOut:false,
     titleClass:"toastr_title",
     messageClass:"toastr_message",
     timeOut:800,
     closeButton:true
    })
    let audio= new Audio()
    audio.src="../../../../assets/notification-sound/notification-sound-7062 (1).mp3"
    audio.load()
    audio.play()
  
  }


  changelan(){

    if(this.lang == "en"){
      localStorage.setItem('lang' ,'sv')
      this.show=false

    }
 
    window.location.reload()
    this.show=false

  }

  changelann(){

    if(this.lang == "sv"){
      localStorage.setItem('lang' ,'en')
    }  

    window.location.reload()

  }

  true(){
    this.show=false
    this.showw=true
  }

  closeee(){
this.ul=false
}
open(){
  this.ul=true
}



}
