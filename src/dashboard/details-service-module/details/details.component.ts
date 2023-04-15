import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddServiceComponent } from 'src/dashboard/add-service/add-service/add-service.component';
import { ServicesService } from 'src/dashboard/service-moduel/Service/services.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  showFormDelete:boolean=false
  showService:any[]=[]
  checked:any=[]
  showw:any[]=[]
  ff:any
  title:any
  title_sv:any
  show=true
  description_en:any
  description_ev:any
name:any=''
  img:boolean=false
  disshow=false
id:any
lang:any
details:any= {}

  constructor(private serv:ServicesService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,private _formBuilder: FormBuilder,
    private router: ActivatedRoute) { 
 this.id= this.router.snapshot.paramMap.get('id')
     
    }

  ngOnInit(): void {
  this.getDetailsService()
  }
  openForm(element:any){
     
    const dialogRef = this.dialog.open(AddServiceComponent, {
     width:'750px',
     height:'85%',
     disableClose : true,
     data:element
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
         this.getDetailsService()
           } 
       });
       
     }
  getDetailsService(){
    this.serv.getSHow(this.id).subscribe((data:any)=>{
      this.details=data.data
      this.title=data.data.title.en
      this.title_sv=data.data.title.sv
      this.description_en=data.data.description.en
      this.description_ev=data.data.description.sv
this.name=data.data.workers.name
console.log(this.name);

    })
  }
}