import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/dashboard/service-moduel/Service/services.service';

@Component({
  selector: 'app-newswevice',
  templateUrl: './newswevice.component.html',
  styleUrls: ['./newswevice.component.css']
})
export class NewsweviceComponent {
  serv:any[]=[]
id:any[]=[]
  constructor(private sersv:ServicesService,public dialog: MatDialog,private fb:FormBuilder,
    private toster :ToastrService ,private rotue : Router,
  ) { }



  ngOnInit(): void {

      }

   

    }
