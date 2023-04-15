import { Component } from '@angular/core';
import { WorkersService } from 'src/dashboard/workers/services/workers.service';
import { HomeserviceService } from '../homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img:boolean=false
  ordertodat:any={}
ordertomonth:any={}
totalprice:any={}
finishedOrder:any={}

  constructor(private serv:HomeserviceService) { }

  ngOnInit(): void {
    this.getDataHome()
      }
   

   getDataHome(){
this.serv.getAllDataHome().subscribe((data:any)=>{
this.ordertodat=data.toDay
this.ordertomonth=data.tomonth
this.totalprice=data.all_total_price
this.finishedOrder=data.finished
})
   }
}
