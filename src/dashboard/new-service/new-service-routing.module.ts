import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsweviceComponent } from './newswevice/newswevice.component';

const routes: Routes = [
  {path:'',component:NewsweviceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewServiceRoutingModule { }
