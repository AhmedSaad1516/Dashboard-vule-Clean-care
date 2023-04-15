import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LOADERS, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmcloeComponent } from 'src/dashboard/addworker/addworkers/confirmcloe/confirmcloe.component';
import { CategoryServiceService } from 'src/dashboard/category/services/category-service.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  formCategory!:FormGroup
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
    private serv:CategoryServiceService , private toaster:ToastrService,
    private sppiner :NgxSpinnerService,
    public dialog: MatDialogRef<AddcategoryComponent>,
    public matDialog: MatDialog) { }
    
ngOnInit(): void {
  console.log(this.data);
  
  this.createForm()
}

createForm(){
  this.formCategory=this.fb.group({
    title_en:[this.data?.title || '',[Validators.required]],
    title_sv:[this.data?.title || '',[Validators.required]],
    gallery:[this.data?.images ||  '',[Validators.required]]
  })
  this.formValues = this.formCategory.value
  console.log(this.formValues);
  
}

selectPhoto(event:any){
  this.photoName=event.target.value
  this.formCategory.get('gallery')?.setValue(event.target.files[0])

if(event.target.files[0]){
let reader = new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload = (event:any)=>{
this.url = event.target.result
} 
}

}

createWorker(){
let model = this.creatFoemData()
this.serv.createCategory(model).subscribe((data:any)=>{
  this.toaster.success('It has been added  The Category successfully', '', {
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
  this.dialog.close()
})
}


creatFoemData(){
  let newdata = new FormData()
  Object.entries(this.formCategory.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}


updateCategory(){
  this.img=true
  let model = this.creatFoemData()
this.serv.updateCategory(model , this.data.id).subscribe(res =>{

let audio = new Audio
audio.src='../../../assets/notification-sound/login.wav'
audio.load()
audio.play()
this.dialog.close(true)
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
this.img=false
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
this.dialog.close()
})

}


close(){
  let haschasnges = false
  Object.keys(this.formValues).forEach((item) =>{
     if(this.formValues[item] !== this.formCategory.value[item]) {
      haschasnges=true
     }
  })

  if(haschasnges){
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
