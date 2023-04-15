import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementshowComponent } from './announcementshow/announcementshow.component';

const routes: Routes = [
  {path:'',component:AnnouncementshowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementShowRoutingModule { }
