import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AddworkersComponent } from 'src/dashboard/addworker/addworkers/addworkers.component';
import { AddworkerModule } from 'src/dashboard/addworker/addworker.module';
import { AdminloginService } from 'src/auth/services/adminlogin.service';
import { AddprofileComponent } from 'src/dashboard/addprofile/addprofile/addprofile.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  admin:any=''
  constructor(private serv:AdminloginService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
    this.getProfileAdmin()
      }


      getProfileAdmin(){
        this.serv.showAdmin().subscribe((data:any)=>{
          this.admin=data.data
          
        })
      }

      update(element:any){
        const dialogRef = this.dialog.open(AddprofileComponent, {
          width:'750px',
          height:'85%',
          disableClose : true,
            data:element
            });
        
            dialogRef.afterClosed().subscribe(result => {
              if (result == true){
                this.getProfileAdmin()
                } 
            });
            
      }
}
