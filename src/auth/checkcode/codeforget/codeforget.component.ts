import { Component, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { ResetpasswordService } from 'src/auth/resetpassword/services/resetpassword.service';
import { CodepasswordService } from '../service/codepassword.service';
@Component({
  selector: 'app-codeforget',
  templateUrl: './codeforget.component.html',
  styleUrls: ['./codeforget.component.css']
})
export class CodeforgetComponent {
  @Input()
  formCode!:FormGroup
  showError:boolean=false
  img:boolean=false
  constructor(private fb :FormBuilder,private serv:CodepasswordService,
      private toaster:ToastrService, private router:Router,
      private spinner:NgxSpinnerService) { } 

      ngOnInit(): void {

        this.checkCode()
      }

      checkCode(){
        this.formCode=this.fb.group({
          email:['',[Validators.required,Validators.email]],
          code:['',Validators.required]
        })
      }


      sendCode(){
       this.serv.checkCode(this.formCode.value).subscribe((status:any)=>{
        if(status.status == false){
          this.showError=true
          this.router.navigateByUrl('/checkcode')
      
        
        }
        else{
              this.showError=false
              this.router.navigateByUrl('/restpassword')
        
        
        }
        
       })
      }
}

