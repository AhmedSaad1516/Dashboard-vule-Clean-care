import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from 'src/auth/adminlogin/adminlogin.component';
import { GuardLoginGuard } from 'src/core/guard-login.guard';
import { HomeComponent } from 'src/dashboard/leyout/home/home.component';

const routes: Routes = [
  {path:'',component:AdminloginComponent,canActivate:[GuardLoginGuard]},

      {path:'',
   loadChildren: () =>import('../dashboard/dashboard.module').then(m => m.DashboardModule)},

  {path:'login',component:AdminloginComponent, canActivate:[GuardLoginGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
