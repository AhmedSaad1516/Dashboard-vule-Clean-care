import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowAllCompanyRoutingModule } from './show-all-company-routing.module';
import { ShowComponent } from './show/show.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowComponent
  ],
  imports: [
    CommonModule,
    ShowAllCompanyRoutingModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class ShowAllCompanyModule { }
