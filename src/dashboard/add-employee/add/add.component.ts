import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RoleServiceService } from 'src/dashboard/roles/service/role-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  img:boolean=false
  addEmployee!:FormGroup
  roles:any[]=[]
  constructor(

   
    private fb:FormBuilder,
    private serv:RoleServiceService , private toaster:ToastrService,
    private sppiner :NgxSpinnerService,
    public matDialog: MatDialog) { }
    
ngOnInit(): void {

  this.createForm()
this.getAllRole()
}
createForm(){
this.addEmployee=this.fb.group({
  name:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  address:['',Validators.required],
  phone:['',Validators.required],
  password:['',Validators.required],
  password_confirmation:['',Validators.required],
  role :['',Validators.required]
})
}

sendAddEmployee(){
this.serv.AddEmployee(this.addEmployee.value).subscribe((data:any)=>{
  this.toaster.success('It was added Employee successfully','',{
    timeOut:1000,
    closeButton:true,
    progressBar:true
  })
  let audio = new Audio
  audio.src='../../../assets/notification-sound/login.wav'
  audio.load()
  audio.play()
  this.img=false
  this.addEmployee.reset()
}, error =>{
  this.img=false
  let audio = new Audio
  audio.src='../../../assets/notification-sound/login.wav'
  audio.load()
  audio.play()
  this.addEmployee.reset()
})
}

getAllRole(){
  this.serv.getAllRole().subscribe((data:any)=>{
    this.roles=data.roles.data
  })


}
}
