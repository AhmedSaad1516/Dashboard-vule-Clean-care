import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowlastexpensesComponent } from './showlastexpenses/showlastexpenses.component';

const routes: Routes = [
  {path:'',component:ShowlastexpensesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowlastexpensesRoutingModule { }
