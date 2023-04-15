import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardDashbardGuard } from 'src/core/guard-dashbard.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
      path:'',
     component:NavbarComponent,
     canActivateChild:[GuardDashbardGuard],
     children:[
      
      {path:'home',
   loadChildren: () =>import('../dashboard/leyout/leyout.module').then(m => m.LeyoutModule)},
         
   {path:'order',
   loadChildren: () => import(`../dashboard/orders/orders.module`).then(m => m.OrdersModule)},
   
   {path:'cansledorder',
   loadChildren: () => import(`../dashboard/canseledorders/canseledorders.module`).then(m => m.CanseledordersModule)},

   {path:'workers',
   loadChildren: () => import(`../dashboard/workers/workers.module`).then(m => m.WorkersModule)},
   {path:'addworkers',
   loadChildren: () => import(`../dashboard/add-workers/add-workers.module`).then(m => m.AddWorkersModule)},
   {path:'detailsWorker/:id',
   loadChildren: () => import(`../dashboard/details-worker/details-worker.module`).then(m => m.DetailsWorkerModule)},

   {path:'chat',
   loadChildren: () => import(`../dashboard/chat/chat.module`).then(m => m.ChatModule)},

  //  {path:'chat/:id',
  //  loadChildren: () => import(`../dashboard/chat/show-chat/show-chat.component`).then(m => m.ShowChatComponent)},

   {path:'service',
   loadChildren: () => import(`../dashboard/service-moduel/service-moduel.module`).then(m => m.ServiceModuelModule)},
   {path:'addlastservices',
   loadChildren: () => import(`../dashboard/add-last-services/add-last-services.module`).then(m => m.AddLastServicesModule)},
   {path:'detailsServices/:id',
   loadChildren: () => import(`../dashboard/details-service-module/details-service-module.module`).then(m => m.DetailsServiceModuleModule)},
  
   {path:'category',
   loadChildren: () => import(`../dashboard/category/category.module`).then(m => m.CategoryModule)},

   {path:'profile',
   loadChildren: () => import(`../dashboard/profile/profile.module`).then(m => m.ProfileModule)},

   {path:'users',
   loadChildren: () => import(`../dashboard/users/users.module`).then(m => m.UsersModule)},

   {path:'detailsUser/:id',
   loadChildren: () => import(`../dashboard/details-users/details-users.module`).then(m => m.DetailsUsersModule)},
   {path:'newservice',
   loadChildren: () => import(`../dashboard/new-service/new-service.module`).then(m => m.NewServiceModule)},

   
   {path:'subService',
   loadChildren: () => import(`../dashboard/sub-service/sub-service.module`).then(m => m.SubServiceModule)},
   {path:'detailssubService/:id',
   loadChildren: () => import(`../dashboard/details-sub-service/details-sub-service.module`).then(m => m.DetailsSubServiceModule)},
   {path:'showCompany',
   loadChildren: () => import(`../dashboard/show-all-company/show-all-company.module`).then(m => m.ShowAllCompanyModule)},
   {path:'footer',
   loadChildren: () => import(`../dashboard/footer/footer.module`).then(m => m.FooterModule)},
   {path:'createabout',
   loadChildren: () => import(`../dashboard/about/about.module`).then(m => m.AboutModule)},
   {path:'showabout',
   loadChildren: () => import(`../dashboard/show-about/show-about.module`).then(m => m.ShowAboutModule)},
   {path:'role',
   loadChildren: () => import(`../dashboard/roles/roles.module`).then(m => m.RolesModule)},
   {path:'employee',
   loadChildren: () => import(`../dashboard/employee/employee.module`).then(m => m.EmployeeModule)},
   {path:'addemployee',
   loadChildren: () => import(`../dashboard/add-employee/add-employee.module`).then(m => m.AddEmployeeModule)},
   {path:'addnotes',
   loadChildren: () => import(`../dashboard/addnotes/addnotes.module`).then(m => m.AddnotesModule)},
   {path:'showexpenses',
   loadChildren: () => import(`../dashboard/show-expenses/show-expenses.module`).then(m => m.ShowExpensesModule)},
   {path:'addannouncement',
   loadChildren: () => import(`../dashboard/announcement/announcement.module`).then(m => m.AnnouncementModule)},
   {path:'showannouncement',
   loadChildren: () => import(`../dashboard/announcement-show/announcement-show.module`).then(m => m.AnnouncementShowModule)},
  
   {path:'expenses',
   loadChildren: () => import(`../dashboard/showlastexpenses/showlastexpenses.module`).then(m => m.ShowlastexpensesModule)},
  
   {path:'terms and conditions',
   loadChildren: () => import(`../dashboard/terms-and-conditions/terms-and-conditions.module`).then(m => m.TermsAndConditionsModule)},
  
  
  
  
  ]


  

  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
