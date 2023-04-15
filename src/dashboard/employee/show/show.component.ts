import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  img:boolean=false
  employee:any[]=[]
  constructor(private serv:EmployeeServiceService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
   this.getAllEmployee()
      }

      getAllEmployee(){
         this.serv.getAllEmployee().subscribe((data:any)=>{
              this.employee=data.user
         })
      }
}
