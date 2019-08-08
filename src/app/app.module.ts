import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { TrangChuModule } from './home/trang-chu/trang-chu.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './_core/material/material.module';
import { BarRatingModule } from '../../node_modules/ngx-bar-rating/bundles/ngx-bar-rating.umd.js';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountdownModule } from 'ngx-countdown';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("839484203099238")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    OwlModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    TrangChuModule,
    SweetAlert2Module,
    MaterialModule,
    FormsModule,
    BarRatingModule,
    NgxPaginationModule,
    CountdownModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
