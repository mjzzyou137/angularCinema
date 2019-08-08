import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangNhapAdminComponent } from './admin/dang-nhap-admin/dang-nhap-admin.component';
import { AuthhGuard } from './_core/authh.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",loadChildren:"./home/home.module#HomeModule"},
  {path:"admin",loadChildren:"./admin/admin.module#AdminModule",
canActivate:[AuthhGuard]},
  {path:"dang-nhap",component:DangNhapAdminComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
