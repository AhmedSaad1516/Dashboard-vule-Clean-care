import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddworkersComponent } from './addworkers/addworkers.component';

const routes: Routes = [
  {path:'',component:AddworkersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddWorkersRoutingModule { }
