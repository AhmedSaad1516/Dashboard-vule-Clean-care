import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ShowCategoryComponent } from './show-category/show-category.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CongirmDeleteComponent } from './congirm-delete/congirm-delete.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShowCategoryComponent,
    CongirmDeleteComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
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
    MatSlideToggleModule,
    FormsModule,
    SharedModule
  ]
})
export class CategoryModule { }
