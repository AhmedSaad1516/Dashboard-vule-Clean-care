import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowtermsandconditionsComponent } from './showtermsandconditions/showtermsandconditions.component';

const routes: Routes = [
  {path:'',component:ShowtermsandconditionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsAndConditionsRoutingModule { }
