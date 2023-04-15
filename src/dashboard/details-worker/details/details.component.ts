import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddworkersComponent } from 'src/dashboard/addworker/addworkers/addworkers.component';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any
  workers:any={}
  reviwe:any[]=[]
  lang:any
  constructor(private serv:WorkersService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
    private spinner :NgxSpinnerService , private router:ActivatedRoute) { 
this.id = this.router.snapshot.paramMap.get('id')
    }

  ngOnInit(): void {
    this.getDetails()
      }


      getDetails(){
        this.serv.getDetailsWorker(this.id,this.lang ).subscribe((data:any)=>{
this.workers=data.data
this.reviwe=data.data.review
console.log(data.data.review);

        })
      }
      update(element:any){
        const dialogRef = this.dialog.open(AddworkersComponent, {
          width:'750px',
          height:'750px',
          disableClose : true,
          data:element
            });
        
            dialogRef.afterClosed().subscribe(result => {
              if (result == true){
                this.getDetails()
                } 
              
            });
      }
}
