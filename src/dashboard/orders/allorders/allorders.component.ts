import { Component } from '@angular/core';
import { OrdersService } from './servicrs/orders.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent {
  allOrder :any[]=[]
  showFormDelete:boolean=false
  constructor(private serv:OrdersService,private spinner :NgxSpinnerService,
    private toater:ToastrService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.serv.getAllOrder().subscribe((data:any)=>{
this.allOrder = data.data      
    })
  }


  openDelet(){
    this.showFormDelete=true
        }


        close(){
          this.toater.success('Nothing was deleted','',{
            timeOut:1000,
            progressBar:true,
            closeButton:true
          })
       this.showFormDelete=false
    }


  delete(id:number){
    this.spinner.show()
    this.serv.deleteOrder(id).subscribe(data =>{
this.toater.success('The worker has been deleted successfully' , '',{
 timeOut:1000,
 closeButton:true,
 progressBar:true
})


let audio = new Audio
audio.src='../../../assets/notification-sound/login.wav'
audio.load()
audio.play()
   this.getOrders()
   this.spinner.hide()
   this.showFormDelete=false
  })
  }




}
