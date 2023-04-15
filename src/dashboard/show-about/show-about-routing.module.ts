import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAboutComponent } from './show-about/show-about.component';

const routes: Routes = [
  {path:'',component:ShowAboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowAboutRoutingModule { }
