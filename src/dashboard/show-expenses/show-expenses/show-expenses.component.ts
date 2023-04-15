import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddnotesComponent } from 'src/dashboard/addnotes/addnotes/addnotes.component';
import { NotesServiceService } from 'src/dashboard/addnotes/services/notes-service.service';

@Component({
  selector: 'app-show-expenses',
  templateUrl: './show-expenses.component.html',
  styleUrls: ['./show-expenses.component.css']
})
export class ShowExpensesComponent {
  img:boolean=false
  showFormDelete:boolean=false
  show:any[]=[]
  id:any
  constructor(private serv:NotesServiceService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAlltypeExpenses()
      }

   
      openForm(){
      
        const dialogRef = this.dialog.open(AddnotesComponent, {
          width:'600px',
          height:'70%',
          disableClose : true
            });
        
            dialogRef.afterClosed().subscribe(result => {
              if (result == true){
                this.getAlltypeExpenses()
                } 
            });
      }

      getAlltypeExpenses(){
        this.serv.getAlltypeExpense().subscribe((data:any)=>{
this.show=data


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
            this.serv.deletetypes(this.id).subscribe((data:any) =>{
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
           this.getAlltypeExpenses()
      
          },error =>{
            this.toster.error(error.message)
            this.img=false
          })
          console.log(this.id);
          
          }
           // End Function  delete Woker
      
           update(element:any){
            const dialogRef = this.dialog.open(AddnotesComponent, {
              width:'600px',
              height:'70%',
              disableClose : true,
              data:element
                });
            
                dialogRef.afterClosed().subscribe(result => {
                  if (result == true){
                    this.getAlltypeExpenses()
                    } 
                });
          }
           
}
