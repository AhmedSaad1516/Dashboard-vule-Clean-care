import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddSubserviceComponent } from 'src/dashboard/add-sub-service/add-subservice/add-subservice.component';
import { SubServicesServicesService } from '../service/sub-services-services.service';

@Component({
  selector: 'app-sub-service',
  templateUrl: './sub-service.component.html',
  styleUrls: ['./sub-service.component.css']
})
export class SubServiceComponent {
  subServices:any[]=[]
  filter:any = []
  timeOutId:any
  id:any
  lang:any = []
showFormDelete:boolean=false
img:boolean=false
  constructor(private serv :SubServicesServicesService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAlllSubService()
      }

       // Start Get All Data getAlllSubService

      getAlllSubService(){
        this.serv.getAllSubService(this.lang).subscribe((data:any)=>{
          this.subServices=data.data
        })
      }
       // End Get All Data getAlllSubService



       // Start open details Update getAlllSubService

      openForm(){
        const dialogRef = this.dialog.open(AddSubserviceComponent, {
         width:'600px',
         height:'80%',
         disableClose : true
           });
       
           dialogRef.afterClosed().subscribe(result => {
            if (result == true){
              this.getAlllSubService()
                } 
           });
           
         }
       // End open details Update getAlllSubService

       // Start open Confirm Model Delete getAlllSubService

      openDelet(id:any){
        this.showFormDelete=true
        this.id =id
            }
            // End open Confirm Model Delete getAlllSubService

            // Start open Confirm close Model Delete getAlllSubService
            close(){
              this.toster.success('Nothing was deleted','',{
                timeOut:1000,
                progressBar:true,
                closeButton:true
              })
           this.showFormDelete=false
        }
        // End open Confirm Model Delete getAlllSubService

// Start function Delete getAlllSubService
       delete(id:any){
     this.img=true
      this.serv.deleteSubService(this.id).subscribe((data:any) =>{       
  this.toster.success('The worker has been deleted successfully' , '',{
   timeOut:1000,
   closeButton:true,
   progressBar:true
  })
  let audio = new Audio
  audio.src='../../../assets/notification-sound/login.wav'
  audio.load()
  audio.play()
  this.img=false
     this.showFormDelete=false
     this.getAlllSubService()

    },error =>{
      this.toster.error(error.message)
      this.img=false
    })    
    }
// End function Delete getAlllSubService

    update(element:any){
      const dialogRef = this.dialog.open(AddSubserviceComponent, {
        width:'750px',
        height:'750px',
        disableClose : true,
        data:element
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result == true){
              this.getAlllSubService()
              } 
            
          });
    }

    // search(event:any){

    //   this.filter['q'] = event.value
    //   clearTimeout(this.timeOutId)
    //  this.timeOutId = setTimeout(() => {
     

    //     this.getAlllSubService()
   
    //   }, 1000);

    
    // }
    
}
