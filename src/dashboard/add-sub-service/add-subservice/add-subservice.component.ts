import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmcloeComponent } from 'src/dashboard/addworker/addworkers/confirmcloe/confirmcloe.component';
import { ServicesService } from 'src/dashboard/service-moduel/Service/services.service';
import { SubServicesServicesService } from 'src/dashboard/sub-service/service/sub-services-services.service';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';

@Component({
  selector: 'app-add-subservice',
  templateUrl: './add-subservice.component.html',
  styleUrls: ['./add-subservice.component.css']
})
export class AddSubserviceComponent {
  filter:any=[]
service:any[]=[]
lang:any 
  formSubService!:FormGroup
  photoName :any
  show:boolean=false
  formValues:any
  url :any= "";
  photo:any = {
    photoImages:[]
  }
  img:boolean=false
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private serv:SubServicesServicesService , private servv:ServicesService,
    
    private toaster:ToastrService,
    private sppiner :NgxSpinnerService,
    public dialog: MatDialogRef<AddSubserviceComponent>,
    public matDialog: MatDialog) { }
    
ngOnInit(): void {
  // console.log(this.data);

  this.createForm()
  this.getllService()
}

createForm(){
  this.formSubService=this.fb.group({
    title_en:[this.data?.title.en ||'',[Validators.required]],
    title_sv:[this.data?.title.sv ||'',[Validators.required]],
    price:[this.data?.price ||'',[Validators.required]],
    service_id:[this.data?.service_id ||'',[Validators.required]]
  })
  this.formValues = this.formSubService.value
}

createSubService(){
  this.serv.createSubServices(this.formSubService.value).subscribe((data:any)=>{
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
  } ,error =>{
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


getllService(){
  this.img=true
  this.servv.getAllService( this.lang , this.filter).subscribe((data:any)=>{
this.service= data.data   
this.img=false

  }, error =>{
    // this.rotue.navigateByUrl('/login')
    // localStorage.removeItem('token')
    // this.toster.error('token is ex')
    this.img=false

  })
}



close(){
  let haschanges = false

Object.keys(this.formValues).forEach((item) =>{
  if(this.formValues[item] !== this.formSubService.value[item]){
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
