import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AboutService } from 'src/dashboard/about/service/about.service';

@Component({
  selector: 'app-show-about',
  templateUrl: './show-about.component.html',
  styleUrls: ['./show-about.component.css']
})
export class ShowAboutComponent {

  img:boolean=false
  dataAbout:any=[]
    constructor(private router:Router , private toster:ToastrService,
      private serv:AboutService,private fb:FormBuilder) 
      {
      
       }
    ngOnInit(): void {
  this.getData()
        }

        
        getData(){
          this.serv.getAllData().subscribe((data:any)=>{
       this.dataAbout=data.about
       console.log(this.dataAbout);
       
          })
        }
}
