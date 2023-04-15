import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FooterservicesService } from '../services/footerservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
footerForm!:FormGroup
img:boolean=false
  constructor(private router:Router , private toster:ToastrService,
    private serv:FooterservicesService,private fb:FormBuilder
   ) {
    
     }
  ngOnInit(): void {
    this.createForm()
      }

      createForm(){
        this.footerForm=this.fb.group({
          title:[''],
          content:[''],
          facebook_url:[''],
          tiktok_url:[''],
          twitter_url:[''],
          instagram_url:[''],
          address:[''],
          phone:[''],
          email:['',[Validators.email]]
        })
      }


      submit(){
        this.img=true
this.serv.createFooter(this.footerForm.value).subscribe((data:any)=>{
  this.toster.success('added done', '', {
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
  this.img=false
  this.footerForm.reset()
},error =>{
  this.img=false
})        
      }
}
