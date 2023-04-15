import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FooterservicesService } from 'src/dashboard/footer/services/footerservices.service';
import { AboutService } from '../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutForm!:FormGroup
  img:boolean=false
  dataAbout:any[]=[]
    constructor(private router:Router , private toster:ToastrService,
      private serv:AboutService,private fb:FormBuilder
     ) {
      
       }
    ngOnInit(): void {
      this.createForm()
    
        }
        createForm(){
        this.aboutForm=this.fb.group({
          title:['',[Validators.required]],
          description:['',[Validators.required]]
        })
        }


        submit(){
          this.img=true
       this.serv.createAbout(this.aboutForm.value).subscribe((data:any)=>{
        this.toster.success('added done', '', {
          disableTimeOut:false,
         timeOut:1000,
         closeButton:true,
        })
        let audio = new Audio
        audio.src='../../../assets/notification-sound/login.wav'
        audio.load()
        audio.play()
        this.img=false
        this.aboutForm.reset() 
       },error =>{
        this.img=false
       })
        }

      
}
