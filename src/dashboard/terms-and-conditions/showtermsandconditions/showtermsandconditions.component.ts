import { Component } from '@angular/core';
import {  TermsAndConditionsService } from '../services/terms-and-conditions.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AddexpenseComponent } from 'src/dashboard/addexpense/addexpense/addexpense.component';
import { AddtermsandconditionsComponent } from 'src/dashboard/addtermsandconditions/addtermsandconditions/addtermsandconditions.component';

@Component({
  selector: 'app-showtermsandconditions',
  templateUrl: './showtermsandconditions.component.html',
  styleUrls: ['./showtermsandconditions.component.css']
})
export class ShowtermsandconditionsComponent {
  formshowlastexpenses!:FormGroup
  img:boolean=false
  showFormDelete:boolean=false
  show:any[]=[]
  id:any
  constructor(private serv:TermsAndConditionsService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
   ) { }


   ngOnInit(): void {
    this.getAllTerms()
    // this.getAlltypeExpenses()
      }



openForm(){
     
  const dialogRef = this.dialog.open(AddtermsandconditionsComponent, {
   width:'750px',
   height:'85%',
   disableClose : true
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result == true){
     this.getAllTerms()
         } 
     });
     
   }
   getAllTerms(){
  this.serv.gettermsconditions().subscribe((data:any)=>{
this.show=data[0]
console.log(this.show);

  })
  }

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
           this.getAllTerms()
      
          },error =>{
            this.toster.error(error.message)
            this.img=false
          })
          console.log(this.id);
          
          }
}
