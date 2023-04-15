import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeforgetComponent } from './codeforget/codeforget.component';

const routes: Routes = [
  {path:'',component:CodeforgetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckcodeRoutingModule { }
