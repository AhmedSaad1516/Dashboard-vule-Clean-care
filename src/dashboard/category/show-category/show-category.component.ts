import { Component } from '@angular/core';
import { CategoryServiceService } from '../services/category-service.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AddworkersComponent } from 'src/dashboard/addworker/addworkers/addworkers.component';
import { AddworkerModule } from 'src/dashboard/addworker/addworker.module';
import { AddcategoryComponent } from 'src/dashboard/add-category/addcategory/addcategory.component';
@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent {


  
constructor(private serv:CategoryServiceService ,public dialog: MatDialog,private fb:FormBuilder,
  private toster :ToastrService ,private rotue : Router,
  private spinner :NgxSpinnerService){}
Category:any[]=[]
showdelete:boolean=false
img:any
id:any
ngOnInit(): void {
  this.getAllCategory()
    }

    openForm(){
      
      const dialogRef = this.dialog.open(AddcategoryComponent, {
        width:'600px',
        height:'70%',
        disableClose : true
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result == true){
              this.getAllCategory()
              } 
          });
    }

    getAllCategory(){
      this.serv.getAllCategory().subscribe((data:any)=>{
  this.Category=data.data
      },error =>{
        this.rotue.navigateByUrl('/login')
        localStorage.removeItem('token')
        this.toster.error('token is ex')
      })
    }

   

    openDelete(id:any){
      this.showdelete=true
      this.id =id
    }
clocesdelet(){
  this.toster.success('Nothing was deleted','',{
    timeOut:1000,
    progressBar:true,
    closeButton:true
  })
  this.showdelete=false
}

    delete(id:any){
      console.log(id);
      
      this.img=true
this.serv.deleteCategory(this.id).subscribe(data=>{
  let audio = new Audio
  audio.src='../../../assets/notification-sound/login.wav'
  audio.load()
  audio.play()
this.showdelete=false
this.img=false

  this.toster.success('The worker has been deleted successfully' , '',{
    timeOut:1000,
    closeButton:true,
    progressBar:true
   })

this.getAllCategory()
  
})      
    }

    updata(element:any){
          
      const dialogRef = this.dialog.open(AddcategoryComponent, {
        width:'750px',
        height:'85%',
        disableClose : true,
        data:element
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result == true){
              this.getAllCategory()
              } 
          });
    }
}
