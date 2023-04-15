import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsServiceModuleRoutingModule } from './details-service-module-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsServiceModuleRoutingModule
  ]
})
export class DetailsServiceModuleModule { }
