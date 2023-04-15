import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeyoutRoutingModule } from './leyout-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from '../dashboard.module';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    LeyoutRoutingModule,
    DashboardModule
  ]
})
export class LeyoutModule { }
