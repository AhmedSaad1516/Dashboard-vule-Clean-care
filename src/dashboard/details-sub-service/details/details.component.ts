import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddSubServiceModule } from 'src/dashboard/add-sub-service/add-sub-service.module';
import { AddSubserviceComponent } from 'src/dashboard/add-sub-service/add-subservice/add-subservice.component';
import { SubServicesServicesService } from 'src/dashboard/sub-service/service/sub-services-services.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any
  img:boolean=false
  title_en:any={}
  title_sv:any={}
  details:any={}
  lang:any
  showFormDelete:boolean=false
  constructor(private serv :SubServicesServicesService,public dialog: MatDialog,
    private toster :ToastrService ,private rotue : Router,
    private spinner :NgxSpinnerService , private router:ActivatedRoute) {

      this.id = this.router.snapshot.paramMap.get('id')
     }

  ngOnInit(): void {
    this.getShowDetails()
      }
getShowDetails(){
  this.serv.getDetailsSubServices(this.id ,this.lang).subscribe((data:any)=>{
this.title_en=data.data.title.en
this.title_sv=data.data.title.sv
this.details=data.data
  })
}
 update(element:any){
      const dialogRef = this.dialog.open(AddSubserviceComponent, {
        width:'750px',
        height:'750px',
        disableClose : true,
        data:element
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result == true){
              this.getShowDetails()
              } 
            
          });
    }
    



}
