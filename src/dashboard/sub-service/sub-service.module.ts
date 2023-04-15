import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubServiceRoutingModule } from './sub-service-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { SubServiceComponent } from './sub-service/sub-service.component';


@NgModule({
  declarations: [
    SubServiceComponent
  ],
  imports: [
    CommonModule,
    SubServiceRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    SharedModule
  ]
})
export class SubServiceModule { }
