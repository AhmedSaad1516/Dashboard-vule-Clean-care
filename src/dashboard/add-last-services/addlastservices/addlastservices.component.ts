import { Component,  OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryServiceService } from 'src/dashboard/category/services/category-service.service';
import { ServicesService } from 'src/dashboard/service-moduel/Service/services.service';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';


@Component({
  selector: 'app-addlastservices',
  templateUrl: './addlastservices.component.html',
  styleUrls: ['./addlastservices.component.css']
})
export class AddlastservicesComponent {
  formWorker!:FormGroup
  photoName :any
  option:any
  filter:any=[]
  show:boolean=false
  formValues:any
  workers:any[]=[]
  // toppings = new FormControl('');

  url :any= "";
  photo:any = {
    photoImages:[]
  }
  img:boolean=false
  worker: string[] = ['name'];
  Category:any[]=[]
    constructor(
  

      private fb:FormBuilder,
      private serv:ServicesService , private toaster:ToastrService,
      private sppiner :NgxSpinnerService,private servCategory:CategoryServiceService,
      public matDialog: MatDialog, private servv:WorkersService) { }
      
  ngOnInit(): void {



    this.createForm()
    this.getAllWorker()
    this.getAllCategory()
  }
 

  createForm(){
    this.formWorker=this.fb.group({
      title_en:['',[Validators.required]],
      title_sv:['',[Validators.required]],
      description_en:[ '',[Validators.required]],
      description_sv:[ '',[Validators.required]],
      price:[ '',[Validators.required]],
      gallery:[ '',[Validators.required]],
      category_id:[ '',[Validators.required]],
      worker_id:[ '',[Validators.required]]
    })

    
  }
  selectPhoto(event:any){
    this.photoName=event.target.value
    this.formWorker.get('gallery')?.setValue(event.target.files[0])

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
this.serv.CreateService(model).subscribe((data:any)=>{
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
    Object.entries(this.formWorker.value).forEach(([key , value]:any)=>{
      newdata.append(key, value)
    })
    return newdata
  }

getAllWorker(){
this.servv.getWorker(this.filter).subscribe((data:any)=>{
  this.workers=data.data
})
}
getAllCategory(){
this.servCategory.getAllCategory().subscribe((data:any)=>{
this.Category=data.data
})
}
}
