import { Component } from '@angular/core';
import { OrdersService } from 'src/dashboard/orders/allorders/servicrs/orders.service';

@Component({
  selector: 'app-canselorder',
  templateUrl: './canselorder.component.html',
  styleUrls: ['./canselorder.component.css']
})
export class CanselorderComponent {
  canselOrder:any[]=[]
  constructor(private serv:OrdersService) { }

  ngOnInit(): void {
    console.log(this.canselOrder);
    
  }

  getCanseledOrders(){
    this.serv.getOrderCanseled().subscribe((data:any)=>{
this.canselOrder = data.data
    })
  }
}
