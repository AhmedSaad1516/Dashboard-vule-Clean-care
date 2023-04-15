import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddServiceComponent } from 'src/dashboard/add-service/add-service/add-service.component';
import { ServicesService } from '../Service/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent {
  showFormDelete:boolean=false
  showService:any[]=[]
  checked:any=[]
  showw:any[]=[]
  ff:any
  show=true
  img:boolean=false
  disshow=false
id:any
counter=0
total:any
lang:any=[]
page:any =1
filter:any=[
]
timeOutId:any
showServices:any={}
  isChecked = true;

  constructor(private serv:ServicesService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,private _formBuilder: FormBuilder,
    private activateRout: ActivatedRoute) { 
 
     
    }

  ngOnInit(): void {
  this.getllService()
  }

  getllService(){
    this.img=true
    this.serv.getAllService( this.lang , this.filter).subscribe((data:any)=>{
this.showService= data.data 
this.img=false

    },error =>{
      this.rotue.navigateByUrl('/login')
      localStorage.removeItem('token')
      this.toster.error('token is ex')
      this.img=false

    })
  }


  openForm(){
     
    const dialogRef = this.dialog.open(AddServiceComponent, {
     width:'750px',
     height:'85%',
     disableClose : true
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
         this.getllService()
           } 
       });
       
     }


     
     openDelet(id:any){
      this.showFormDelete=true
      this.id=id
          }
          close(){
            this.toster.success('Nothing was deleted','',{
              timeOut:1000,
              progressBar:true,
              closeButton:true
            })
         this.showFormDelete=false
      }


     delete(id:any){
      this.img=true
       this.serv.delete(this.id).subscribe(data =>{
   this.toster.success('The worker has been deleted successfully' , '',{
    timeOut:1000,
    closeButton:true,
    progressBar:true
   })
 
 
   let audio = new Audio
   audio.src='../../../assets/notification-sound/login.wav'
   audio.load()
   audio.play()
      this.getllService()
   this.img=false
      this.showFormDelete=false
     })
     }



     active(id:number){
      this.serv.getSta(id).subscribe((data:any)=>{
    console.log(data);

    this.toster.success('Status changed successfully','',{
      timeOut:1000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()




})
     }

update(element:any){
  this.serv.getSHow(element).subscribe((data:any)=>{
this.showw=data.data
const dialogRef = this.dialog.open(AddServiceComponent, {
  width:'750px',
  height:'85%',
  disableClose : true,
  data:this.showw

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true){
      this.getllService()
        } 
    });

  })

}



search(event:any){

  this.filter['q'] = event.value
  clearTimeout(this.timeOutId)
 this.timeOutId = setTimeout(() => {
 

    this.getllService()


  }, 1000);


}
nav(event:any){
  this.page=event

  
}
}
