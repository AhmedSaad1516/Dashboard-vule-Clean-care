import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/dashboard/users/services/user-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any
  users:any={}
  constructor(private serv:UserServiceService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : ActivatedRoute) { 
      this.id= this.rotue.snapshot.paramMap.get('id')
    }

  ngOnInit(): void {
  this.getDetails()
  }

  getDetails(){
    this.serv.getDetailsUser(this.id).subscribe((data:any)=>{
 console.log(data.data);
 
    })
  }

}
