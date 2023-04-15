import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowAboutRoutingModule } from './show-about-routing.module';
import { ShowAboutComponent } from './show-about/show-about.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShowAboutComponent
  ],
  imports: [
    CommonModule,
    ShowAboutRoutingModule,
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
export class ShowAboutModule { }
