import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { WorkersModule } from './workers/workers.module';
import { OrdersModule } from './orders/orders.module';
import { ChatModule } from './chat/chat.module';
import { AddworkerModule } from './addworker/addworker.module';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    WorkersModule,
    OrdersModule,
    AddworkerModule,
    SharedModule,
    MatSelectModule,
    FormsModule
  ]
})
export class DashboardModule { }
