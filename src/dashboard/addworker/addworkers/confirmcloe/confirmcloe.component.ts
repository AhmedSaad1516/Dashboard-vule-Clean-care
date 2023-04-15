import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmcloe',
  templateUrl: './confirmcloe.component.html',
  styleUrls: ['./confirmcloe.component.css']
})
export class ConfirmcloeComponent {
  img:boolean=false
  constructor(public dialog: MatDialogRef<ConfirmcloeComponent>,
    public matDialog: MatDialog , private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  confirm(){
    this.img=true
this.matDialog.closeAll()
this.toaster.success('Nothing is changed', '', {
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
  }
  close(){
    this.img=true
this.dialog.close()
this.img=false
  }
}
