import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from 'src/auth/auth.module';
import { LeyoutModule } from 'src/dashboard/leyout/leyout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from 'src/core/core.module';
import { AddworkerModule } from 'src/dashboard/addworker/addworker.module';
import { WorkersModule } from 'src/dashboard/workers/workers.module';
import { DashboardModule } from 'src/dashboard/dashboard.module';
import { ServiceModuelModule } from 'src/dashboard/service-moduel/service-moduel.module';
import { AddServiceModule } from 'src/dashboard/add-service/add-service.module';
import { CategoryModule } from 'src/dashboard/category/category.module';
import { AddCategoryModule } from 'src/dashboard/add-category/add-category.module';
import { ForgetpasswordModule } from 'src/auth/forgetpassword/forgetpassword.module';
import { ResetpasswordModule } from 'src/auth/resetpassword/resetpassword.module';
import { CheckcodeModule } from 'src/auth/checkcode/checkcode.module';
import { AddprofileModule } from 'src/dashboard/addprofile/addprofile.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
// import { DetalisServicesComponent } from 'src/dashboard/detalish-services/detalis-services/detalis-services.component';
// import { DetalishServicesModule } from 'src/dashboard/detalish-services/detalish-services.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddSubserviceComponent } from 'src/dashboard/add-sub-service/add-subservice/add-subservice.component';
import { AddSubServiceModule } from 'src/dashboard/add-sub-service/add-sub-service.module';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { InterceptorErrorModule } from 'src/interceptor-error/interceptor-error.module';
import { RolesModule } from 'src/dashboard/roles/roles.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddtermsandconditionsModule } from 'src/dashboard/addtermsandconditions/addtermsandconditions.module';
import { AddexpenseModule } from 'src/dashboard/addexpense/addexpense.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule,
     BrowserAnimationsModule, 
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     NgxSpinnerModule.forRoot({ type: 'ball-atom"' }),
     ToastrModule.forRoot(),
  
     NgSelectModule,
     CoreModule,
    InterceptorErrorModule,
  AddworkerModule,
  WorkersModule,
  DashboardModule,
  ServiceModuelModule,
  AddServiceModule,
  AddCategoryModule,
  ForgetpasswordModule,
ResetpasswordModule,
RolesModule,
CheckcodeModule,
AddprofileModule,
HttpClientModule,
// DetalishServicesModule,
TranslateModule.forRoot({
  defaultLanguage:'en',
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
}),
NgxPaginationModule,
NgxStarRatingModule,
AddtermsandconditionsModule,
AddexpenseModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
