import { Component,  OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LOADERS, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/dashboard/service-moduel/Service/services.service';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';
import {FormControl} from '@angular/forms';
import { ConfirmcloeComponent } from 'src/dashboard/addworker/addworkers/confirmcloe/confirmcloe.component';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
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

    constructor(
  
      @Inject(MAT_DIALOG_DATA) public data:any,

      private fb:FormBuilder,
      private serv:ServicesService , private toaster:ToastrService,
      private sppiner :NgxSpinnerService,
      public dialog: MatDialogRef<AddServiceComponent>,
      public matDialog: MatDialog, private servv:WorkersService) { }
      
  ngOnInit(): void {



    this.createForm()
    this.getAllWorker()
  }
 

  createForm(){
    this.formWorker=this.fb.group({
      title_en:[this.data?.title.en ||'',[Validators.required]],
      title_sv:[this.data?.title.sv ||'',[Validators.required]],
      description_en:[this.data?.description.en || '',[Validators.required]],
      description_sv:[this.data?.description.sv || '',[Validators.required]],
      price:[this.data?.price || '',[Validators.required]],
      gallery:[this.data?.images || '',[Validators.required]],
      category_id:[this.data?.category_id || '',[Validators.required]],
      worker_id:[ this.data?.workers.name ||'',[Validators.required]]
    })
    this.formValues = this.formWorker.value

    
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
this.dialog.close(true)
}, error =>{


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
  this.dialog.close(true)
  })

  }



  creatFoemData(){
    let newdata = new FormData()
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

update(){
  this.img=true
  let model = this.creatFoemData()
this.serv.update(model , this.data.id).subscribe((data:any)=>{
  this.toaster.success('It has been Update  The Service successfully', '', {
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
this.dialog.close(true)
this.img=false


} , error =>{
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
  this.sppiner.hide()
  this.dialog.close()
  this.img=false
})
}

close(){
  let haschanges = false

Object.keys(this.formValues).forEach((item) =>{
  if(this.formValues[item] !== this.formWorker.value[item]){
    haschanges = true
  }
})
if(haschanges) {
  const dialogRef = this.matDialog.open(ConfirmcloeComponent, {
   
    disableClose: true
 
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result == true){
  
        }
        });
      }else{
        this.dialog.close()
      }
    }
}

