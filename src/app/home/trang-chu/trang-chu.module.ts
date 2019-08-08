import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { UuDaiComponent } from './uu-dai/uu-dai.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { FooterComponent } from './footer/footer.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { ItemUuDaiComponent } from './item-uu-dai/item-uu-dai.component';
import { DatVeHomeComponent } from './dat-ve-home/dat-ve-home.component';
import { CongNghePhimComponent } from './cong-nghe-phim/cong-nghe-phim.component';
import { MaterialModule } from 'src/app/_core/material/material.module';
import { OwlModule } from 'ngx-owl-carousel';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BarRatingModule } from '../../../../node_modules/ngx-bar-rating/bundles/ngx-bar-rating.umd.js'; 
import { LichSuDatVeComponent } from '../lich-su-dat-ve/lich-su-dat-ve.component';
@NgModule({
  declarations: [TrangChuComponent, HeaderComponent, SliderComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, UuDaiComponent, TinTucComponent, FooterComponent, ItemTinTucComponent, ItemUuDaiComponent, DatVeHomeComponent, CongNghePhimComponent, LoginComponent, RegisterComponent,LichSuDatVeComponent],
  exports:[TrangChuComponent, HeaderComponent, SliderComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, UuDaiComponent, TinTucComponent, FooterComponent, ItemTinTucComponent, ItemUuDaiComponent, DatVeHomeComponent, CongNghePhimComponent, LoginComponent, RegisterComponent,LichSuDatVeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    OwlModule,
    FormsModule,
    BarRatingModule,
    SweetAlert2Module
  ]
})
export class TrangChuModule { }
