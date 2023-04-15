import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AnnouncementcreateComponent } from 'src/dashboard/announcement/announcementcreate/announcementcreate.component';
import { AnnouncementServieService } from 'src/dashboard/announcement/services/announcement-servie.service';

@Component({
  selector: 'app-announcementshow',
  templateUrl: './announcementshow.component.html',
  styleUrls: ['./announcementshow.component.css']
})
export class AnnouncementshowComponent {
  announcements:any[]=[]
  filter:any = []
  timeOutId:any
  id:any
  lang:any = []

showFormDelete:boolean=false
img:boolean=false
constructor(private serv:AnnouncementServieService,public dialog: MatDialog,private fb:FormBuilder,
  private toster :ToastrService ,private rotue : Router,
  private spinner :NgxSpinnerService) { }

ngOnInit(): void {
this.getAllAnnouncement()
    }
    openForm(){
      const dialogRef = this.dialog.open(AnnouncementcreateComponent, {
       width:'500px',
       height:'450PX',
       disableClose : true
         });
     
         dialogRef.afterClosed().subscribe(result => {
          if (result == true){
            this.getAllAnnouncement()
              } 
         });
         
       }
getAllAnnouncement(){
  this.serv.getAll().subscribe((data:any)=>{
this.announcements=data.data
  })
}



            // Start confirm model delete Woker
            openDelet(id:any){
              this.showFormDelete=true
              this.id =id
              console.log(this.id);
              
              
                  }
                    // End confirm model delete Woker
                    
                   // Start confirm close model  delete Woker
                  close(){
                    this.toster.success('Nothing was deleted','',{
                      timeOut:1000,
                      progressBar:true,
                      closeButton:true
                    })
                 this.showFormDelete=false
              }
                // End confirm close model  delete Woker
      
            // Start Function  delete Woker
             delete(id:any){
        //    this.img=true
        //     this.serv.delete(this.id).subscribe((data:any) =>{
        //      console.log(this.id);
             
        // this.toster.success('The worker has been deleted successfully' , '',{
        //  timeOut:1000,
        //  closeButton:true,
        //  progressBar:true
        // })
      
      
        // let audio = new Audio
        // audio.src='../../../assets/notification-sound/login.wav'
        // audio.load()
        // audio.play()
        // this.img=false
        //    this.showFormDelete=false
        //    this.getWorker()
      
        //   },error =>{
        //     this.toster.error(error.message)
        //     this.img=false
        //   })
        //   console.log(this.id);
          
          }
           // End Function  delete Woker
      
      
}
