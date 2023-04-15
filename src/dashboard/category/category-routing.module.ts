import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCategoryComponent } from './show-category/show-category.component';

const routes: Routes = [
  {path:'',component:ShowCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
