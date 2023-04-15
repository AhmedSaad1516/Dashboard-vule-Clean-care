import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowExpensesComponent } from './show-expenses/show-expenses.component';

const routes: Routes = [
  {path:'',component:ShowExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowExpensesRoutingModule { }
