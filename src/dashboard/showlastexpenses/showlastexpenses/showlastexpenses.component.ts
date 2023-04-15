import { Component } from '@angular/core';
import { ShowlastexpensesService } from '../services/showlastexpenses.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AddexpenseComponent } from 'src/dashboard/addexpense/addexpense/addexpense.component';

@Component({
  selector: 'app-showlastexpenses',
  templateUrl: './showlastexpenses.component.html',
  styleUrls: ['./showlastexpenses.component.css']
})
export class ShowlastexpensesComponent {
  formshowlastexpenses!:FormGroup
  img:boolean=false
  showFormDelete:boolean=false
  show:any[]=[]
  id:any
  constructor(private serv:ShowlastexpensesService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
   ) { }

  ngOnInit(): void {
    this.createForm()
    // this.getAlltypeExpenses()
      }
createForm(){
  this.formshowlastexpenses=this.fb.group({
    name:['',Validators.required],
    money:['',Validators.required],
    date:['',Validators.required],
    type_id:['',Validators.required],
    notes:['',Validators.required],
  })
}


openForm(){
     
  const dialogRef = this.dialog.open(AddexpenseComponent, {
    width:'600px',
          height:'90%',
   disableClose : true
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result == true){
     
         } 
     });
     
   }
}
