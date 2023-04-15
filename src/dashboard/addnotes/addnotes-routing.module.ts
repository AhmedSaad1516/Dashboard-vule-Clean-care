import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnotesComponent } from './addnotes/addnotes.component';

const routes: Routes = [
  {path:'',component:AddnotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddnotesRoutingModule { }
