import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddworkersComponent } from 'src/dashboard/addworker/addworkers/addworkers.component';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-congirm-delete',
  templateUrl: './congirm-delete.component.html',
  styleUrls: ['./congirm-delete.component.css']
})
export class CongirmDeleteComponent {
  formCategory!:FormGroup
  photoName :any
  show:boolean=false
  formValues:any
  url :any= "";
  photo:any ={ 
    photoImages:[]
}
  
  constructor(
  
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private serv:CategoryServiceService , private toaster:ToastrService,
    private sppiner :NgxSpinnerService,
    public dialog: MatDialogRef<CongirmDeleteComponent>,
    public matDialog: MatDialog) { }
    
    ngOnInit(): void {
    }
    confirm(){
this.matDialog.closeAll()
    }
    close(){
this.dialog.close()
    }
}
