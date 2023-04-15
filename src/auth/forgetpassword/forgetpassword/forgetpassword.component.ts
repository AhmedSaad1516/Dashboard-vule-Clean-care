import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { ForgetPasswordServiceService } from '../services/forget-password-service.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  forgetPassword!:FormGroup
  showError:boolean=false
  img:boolean=false
  constructor(private fb :FormBuilder,private serv:ForgetPasswordServiceService,
      private toaster:ToastrService, private router:Router,
      private spinner:NgxSpinnerService) { } 

      ngOnInit(): void {

        this.createFormForgetpassword()
      }

      createFormForgetpassword(){
        this.forgetPassword=this.fb.group({
          email:['',[Validators.required,Validators.email]]
        })
      }


      sendForgetpassword(){
this.serv.forgetpasswordAdmin(this.forgetPassword.value).subscribe((data:any)=>{
if(data.status == false){
  this.showError=true
  this.router.navigateByUrl('/forgetpassword')

}
else{
      this.showError=false
      this.router.navigateByUrl('/checkcode')


}



      } )       
      }
}
