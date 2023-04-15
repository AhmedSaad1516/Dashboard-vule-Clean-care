import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsWorkerRoutingModule } from './details-worker-routing.module';
import { DetailsComponent } from './details/details.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsWorkerRoutingModule,
    NgxStarRatingModule,
    SharedModule,
    FormsModule
    
  ]
})
export class DetailsWorkerModule { }
