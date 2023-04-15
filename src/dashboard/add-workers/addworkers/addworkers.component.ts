
import { Component,  OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LOADERS, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';
@Component({
  selector: 'app-addworkers',
  templateUrl: './addworkers.component.html',
  styleUrls: ['./addworkers.component.css']
})
export class AddworkersComponent {
  formWorker!:FormGroup
  photoName :any
  workers:any[]=[]
  show:boolean=false
  formValues:any
  url :any= "";
  photo:any = {
    photoImages:[]
  }
  img:boolean=false
    constructor(
  
      private fb:FormBuilder,
      private serv:WorkersService , private toaster:ToastrService,
      private sppiner :NgxSpinnerService,
      public matDialog: MatDialog) { }
      
  ngOnInit(): void {


// this.getWorker()
    this.createForm()

    
  }
 

  createForm(){
    this.formWorker=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      name:['',[Validators.required]],
      address:[ '',[Validators.required]],
      phone:[ '',[Validators.required]],
      NIN:['',[Validators.required]],
      photo:['',[Validators.required]] 
    })
    
 

  }
  selectPhoto(event:any){
    this.photoName=event.target.value
    this.formWorker.get('photo')?.setValue(event.target.files[0])

if(event.target.files[0]){
 let reader = new FileReader();
 reader.readAsDataURL(event.target.files[0])
 reader.onload = (event:any)=>{
  this.url = event.target.result
 } 
}




  }


  createWorker(){
    // this.sppiner.show()
    this.img=true
    let model = this.creatFoemData()
this.serv.createWorker(model).subscribe((data:any)=>{
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

}, error =>{
console.log(error.error.message);

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
this.img=false

  })

  }

  // getWorker(){
  //   this.img=true
  //   this.serv.getHome( ).subscribe((data:any)=>{
  //  this.workers = data.data
  //  this.img=false
  //   })
  // }


  creatFoemData(){
    let newdata = new FormData()
    Object.entries(this.formWorker.value).forEach(([key , value]:any)=>{
      newdata.append(key, value)
    })
    return newdata
  }

}
