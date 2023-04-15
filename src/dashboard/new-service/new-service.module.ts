import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewServiceRoutingModule } from './new-service-routing.module';
import { NewsweviceComponent } from './newswevice/newswevice.component';


@NgModule({
  declarations: [
    NewsweviceComponent
  ],
  imports: [
    CommonModule,
    NewServiceRoutingModule
  ]
})
export class NewServiceModule { }
