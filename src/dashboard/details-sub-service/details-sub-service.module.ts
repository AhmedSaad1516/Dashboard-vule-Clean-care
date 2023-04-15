import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsSubServiceRoutingModule } from './details-sub-service-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsSubServiceRoutingModule
  ]
})
export class DetailsSubServiceModule { }
