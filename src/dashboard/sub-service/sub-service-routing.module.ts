import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubServiceComponent } from './sub-service/sub-service.component';

const routes: Routes = [
  {path:'',component:SubServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubServiceRoutingModule { }
