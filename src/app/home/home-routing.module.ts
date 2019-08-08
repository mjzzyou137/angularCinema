import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { TinTucPhimComponent } from './tin-tuc-phim/tin-tuc-phim.component';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { LichSuDatVeComponent } from './lich-su-dat-ve/lich-su-dat-ve.component';
import { NguoiDungComponent } from './nguoi-dung/nguoi-dung.component';
import { LoginComponent } from './trang-chu/login/login.component';

const routes: Routes = [
    {path:"",component:TrangChuComponent},
    {path:"dat-ve-phim/:id",loadChildren:"../home/dat-ve-phim/dat-ve-phim.module#DatVePhimModule"},
    {path:"chi-tiet-phim/:id",component:ChiTietPhimComponent},
    {path:"tin-tuc-phim/:id",component:TinTucPhimComponent},
    {path:"lich-chieu",component:LichChieuComponent},
    {path:"lich-su-dat-ve",component:LichSuDatVeComponent},
    {path:"nguoi-dung",component:NguoiDungComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
