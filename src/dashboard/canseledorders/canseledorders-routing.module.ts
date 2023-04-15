import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanselorderComponent } from './canselorder/canselorder.component';

const routes: Routes = [
  {path:'',component:CanselorderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanseledordersRoutingModule { }
