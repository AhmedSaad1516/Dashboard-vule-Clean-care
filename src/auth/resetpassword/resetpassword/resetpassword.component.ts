import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { ResetpasswordService } from '../services/resetpassword.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  resetPassword!:FormGroup
  showError:boolean=false
  img:boolean=false
  constructor(private fb :FormBuilder,private serv:ResetpasswordService,
      private toaster:ToastrService, private router:Router,
      private spinner:NgxSpinnerService) { } 

      ngOnInit(): void {

        this.createFormForgetpassword()
      }

      createFormForgetpassword(){
        this.resetPassword=this.fb.group({
          email:['',[Validators.required,Validators.email]],
          password:['',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
          password_confirmation:['',[Validators.required,Validators.minLength(8)]]
        })
      }


      restpasswordAdmin(){
        this.serv.resetpassword(this.resetPassword.value).subscribe((status:any)=>{
          if(status.status == false){
            this.showError=true
            this.router.navigateByUrl('/restpassword')

        
          
          }
          else{
                this.showError=false
                this.router.navigateByUrl('/login')
          
          
          }

          
        })
      }
}
