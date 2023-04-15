import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanseledordersRoutingModule } from './canseledorders-routing.module';
import { CanselorderComponent } from './canselorder/canselorder.component';


@NgModule({
  declarations: [
    CanselorderComponent
  ],
  imports: [
    CommonModule,
    CanseledordersRoutingModule
  ]
})
export class CanseledordersModule { }
