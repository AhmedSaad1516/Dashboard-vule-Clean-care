import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { WorkersService } from '../services/workers.service';
import { AddworkersComponent } from 'src/dashboard/addworker/addworkers/addworkers.component';
import { AddworkerModule } from 'src/dashboard/addworker/addworker.module';
@Component({
  selector: 'app-allworker',
  templateUrl: './allworker.component.html',
  styleUrls: ['./allworker.component.css']
})
export class AllworkerComponent {
  workers:any[]=[]
  filter:any = []
  timeOutId:any
  id:any
  lang:any = []

showFormDelete:boolean=false
img:boolean=false
  constructor(private serv:WorkersService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
    this.getWorker()
      }
  
      
      openForm(){
     
        const dialogRef = this.dialog.open(AddworkersComponent, {
         width:'750px',
         height:'85%',
         disableClose : true
           });
       
           dialogRef.afterClosed().subscribe(result => {
             if (result == true){
               this.getWorker()
               } 
           });
           
         }

      // Start get data All Workers 
      getWorker(){
        this.img=true
        this.serv.getWorker( this.filter ).subscribe((data:any)=>{
       this.workers = data.data
       this.img=false
        },error =>{
          // this.rotue.navigateByUrl('/login')
          // localStorage.removeItem('token')
          // this.toster.error('token is ex')
          this.img=false
        })
      }
      // End get data All Workers 


            // Start confirm model delete Woker
      openDelet(id:any){
        this.showFormDelete=true
        this.id =id
        console.log(this.id);
        
        
            }
              // End confirm model delete Woker
              
             // Start confirm close model  delete Woker
            close(){
              this.toster.success('Nothing was deleted','',{
                timeOut:1000,
                progressBar:true,
                closeButton:true
              })
           this.showFormDelete=false
        }
          // End confirm close model  delete Woker

      // Start Function  delete Woker
       delete(id:any){
     this.img=true
      this.serv.delete(this.id).subscribe((data:any) =>{
       console.log(this.id);
       
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
     this.getWorker()

    },error =>{
      this.toster.error(error.message)
      this.img=false
    })
    console.log(this.id);
    
    }
     // End Function  delete Woker



    // update(element:any){
    //   const dialogRef = this.dialog.open(AddworkersComponent, {
    //     width:'750px',
    //     height:'750px',
    //     disableClose : true,
    //     data:element
    //       });
      
    //       dialogRef.afterClosed().subscribe(result => {
    //         if (result == true){
    //           this.getWorker()
    //           } 
            
    //       });
    // }


    
 // Start Function  search Woker
    search(event:any){

      this.filter['q'] = event.value
      clearTimeout(this.timeOutId)
     this.timeOutId = setTimeout(() => {
     

        this.getWorker()
   
      }, 1000);

    
    }

     // End Function  search Woker
    
      
 
     
}
