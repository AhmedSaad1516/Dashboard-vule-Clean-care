import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlastservicesComponent } from './addlastservices/addlastservices.component';

const routes: Routes = [
  {path:'',component:AddlastservicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLastServicesRoutingModule { }
