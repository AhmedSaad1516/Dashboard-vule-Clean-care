import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsUsersRoutingModule } from './details-users-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsUsersRoutingModule
  ]
})
export class DetailsUsersModule { }
