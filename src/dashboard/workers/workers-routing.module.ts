import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllworkerComponent } from './allworker/allworker.component';

const routes: Routes = [
  {path:'',component:AllworkerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
