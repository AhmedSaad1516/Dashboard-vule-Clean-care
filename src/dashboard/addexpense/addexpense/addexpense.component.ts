import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NotesServiceService } from 'src/dashboard/addnotes/services/notes-service.service';
import { ShowlastexpensesService } from 'src/dashboard/showlastexpenses/services/showlastexpenses.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent {
  expenseForm!:FormGroup
  img:boolean=false
  showType:any[]=[]
  constructor(
  

    private fb:FormBuilder,

    private serv:ShowlastexpensesService , private toaster:ToastrService,
     public dialog: MatDialogRef<AddexpenseComponent>,private servv:NotesServiceService,

    public matDialog: MatDialog) { }
    
ngOnInit(): void {



  this.createForm()
this.getAllTypeId()
}
createForm(){
  this.expenseForm=this.fb.group({
    name:['',[Validators.required]],
    money:['',[Validators.required]],
    date:['',[Validators.required]],
    type_id:['',[Validators.required]],
    notes:['',[Validators.required]]
  })
}



createexpenses(){
  // this.sppiner.show()
  this.img=true

this.serv.create(this.expenseForm.value).subscribe((data:any)=>{
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
getAllTypeId(){
this.servv.getAlltypeExpense().subscribe((data:any)=>{
this.showType=data
})
}
}
