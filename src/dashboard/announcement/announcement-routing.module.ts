import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementcreateComponent } from './announcementcreate/announcementcreate.component';

const routes: Routes = [
  // {path:'',component:AnnouncementcreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
