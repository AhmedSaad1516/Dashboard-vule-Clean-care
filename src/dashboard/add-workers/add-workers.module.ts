import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddWorkersRoutingModule } from './add-workers-routing.module';
import { AddworkersComponent } from './addworkers/addworkers.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddworkersComponent
  ],
  imports: [
    CommonModule,
    AddWorkersRoutingModule,
    MatSortModule,
    MatRippleModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatFormFieldModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatDialogModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatRadioModule,
  MatSidenavModule,
  MatStepperModule,
  MatSelectModule,
  
  MatTableModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatRadioModule,
  MatFormFieldModule,MatFormFieldModule,
  MatStepperModule,
  SharedModule,
  MatExpansionModule,
  MatGridListModule,MatListModule,
  MatTableModule,
  MatDialogModule,
  MatSlideToggleModule ,
  MatAutocompleteModule,
  MatNativeDateModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSortModule,
  MatTableModule,
  ]
})
export class AddWorkersModule { }
