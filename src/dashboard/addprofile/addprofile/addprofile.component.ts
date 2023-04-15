import { Component,  OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LOADERS, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminloginService } from 'src/auth/services/adminlogin.service';
import { ConfirmcloeComponent } from 'src/dashboard/addworker/addworkers/confirmcloe/confirmcloe.component';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent {
  formAdmin!:FormGroup
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
      private serv:AdminloginService , private toaster:ToastrService,
      private sppiner :NgxSpinnerService,
      public dialog: MatDialogRef<AddprofileComponent>,
      public matDialog: MatDialog) { }


      ngOnInit(): void {
        this.createForm()
      }
     
    
      createForm(){
        this.formAdmin=this.fb.group({
          email:[this.data?.email ||  '',[Validators.required,Validators.email]],
          name:[this.data?.name ||'',[Validators.required]],
          address:[ this.data?.address ||'',[Validators.required]],
          phone:[ this.data?.phone ||'',[Validators.required]],
          photo:[this.data?.photo ||'',[Validators.required]] 
        })
        this.formValues = this.formAdmin.value
     
    
      }

      selectPhoto(event:any){
        this.photoName=event.target.value
        this.formAdmin.get('photo')?.setValue(event.target.files[0])
    
    if(event.target.files[0]){
     let reader = new FileReader();
     reader.readAsDataURL(event.target.files[0])
     reader.onload = (event:any)=>{
      this.url = event.target.result
     } 
    }
      }
      updateProfile(){
        // this.sppiner.show()
        this.img=true
        let model = this.creatFoemData()
    this.serv.updateAdmin(model ).subscribe((data:any)=>{
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
      this.dialog.close()
      })
    
      }
 
      
      creatFoemData(){
        let newdata = new FormData()
        Object.entries(this.formAdmin.value).forEach(([key , value]:any)=>{
          newdata.append(key, value)
        })
        return newdata
      }






      close() {
        let haschanges = false
        Object.keys(this.formValues).forEach((item) => { 
    
          if(this.formValues[item] !== this.formAdmin.value[item]) {
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
