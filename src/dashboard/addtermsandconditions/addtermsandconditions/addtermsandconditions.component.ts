import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmcloeComponent } from 'src/dashboard/addworker/addworkers/confirmcloe/confirmcloe.component';
import { TermsAndConditionsService } from 'src/dashboard/terms-and-conditions/services/terms-and-conditions.service';

@Component({
  selector: 'app-addtermsandconditions',
  templateUrl: './addtermsandconditions.component.html',
  styleUrls: ['./addtermsandconditions.component.css']
})
export class AddtermsandconditionsComponent {
  notesForm!:FormGroup
img:boolean=false
formValuse:any

    constructor(
  

      private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data:any,

      private serv:TermsAndConditionsService , private toaster:ToastrService,
      private sppiner :NgxSpinnerService,    public dialog: MatDialogRef<AddtermsandconditionsComponent>,

      public matDialog: MatDialog) { }
      
  ngOnInit(): void {



    this.createForm()

  }
 

  createForm(){
    this.notesForm=this.fb.group({
      title:['',[Validators.required]],
      content:['',[Validators.required]]
  
    })
// this.formValuse=this.notesForm.value
    
  }



  createNotes(){
    // this.sppiner.show()
    this.img=true
this.serv.createtermsandconditions(this.notesForm.value).subscribe((data:any)=>{
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

//   update(){
//     this.img=true
 
// this.serv.updatetype(this.notesForm.value , this.data.id).subscribe(res =>{
  

//   this.sppiner.hide()
//   let audio = new Audio
//   audio.src='../../../assets/notification-sound/login.wav'
//   audio.load()
//   audio.play()
// this.dialog.close(true)
//   this.toaster.success('It has been added  The Worker successfully', '', {
//     disableTimeOut:false,
//    titleClass:"toastr_title",
//    messageClass:"toastr_message",
//    timeOut:1000,
//    onActivateTick:false,
//    toastClass:'ngx-toastr'	,
//    progressBar	:true,
//    easing:'ease-in',
//    enableHtml	:true,
//    newestOnTop:true,
//    tapToDismiss:true,
//    positionClass:'toast-top-right',
//    closeButton:true,

//   })
// }, error =>{

//   this.toaster.error(error.error.message, '', {
//     disableTimeOut:false,
//    titleClass:"toastr_title",
//    messageClass:"toastr_message",
//    timeOut:1000,
//    onActivateTick:false,

//    toastClass:'ngx-toastr'	,
//    progressBar	:true,
//    easing:'ease-in',
//    enableHtml	:true,
//    newestOnTop:true,
//    tapToDismiss:true,
//    positionClass:'toast-top-right',
//    closeButton:true,

//   })
 
//   let audio = new Audio
//   audio.src='../../../assets/notification-sound/login.wav'
//   audio.load()
//   audio.play()
//   this.sppiner.hide()
//   this.dialog.close()
//   })

//   }


  // close() {
  //   let haschanges = false
  //   Object.keys(this.formValuse).forEach((item) => { 

  //     if(this.formValuse[item] !== this.notesForm.value[item]) {
  //        haschanges = true
  //     }
  //   })
  //   if(haschanges) {
         
  //  const dialogRef = this.matDialog.open(ConfirmcloeComponent, {
   
  //   disableClose: true
 
  //     });
  
  //     dialogRef.afterClosed().subscribe(result => {
  //     if(result == true){

  //     }
  //     });
  //   }else{
  //     this.dialog.close()
  //   }
  // }
}
