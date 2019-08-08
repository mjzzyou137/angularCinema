import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminRoutingModule } from './admin-routing.module';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { MaterialModule } from '../_core/material/material.module';
import { FormsModule } from '@angular/forms';
import { DanhSachPhimComponent } from './quan-ly-phim/danh-sach-phim/danh-sach-phim.component';
import { ThemphimComponent } from './quan-ly-phim/themphim/themphim.component';
import { SuaPhimComponent } from './quan-ly-phim/sua-phim/sua-phim.component';
import { DanhSachNguoiDungComponent } from './quan-ly-nguoi-dung/danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { ThemNguoiDungComponent } from './quan-ly-nguoi-dung/them-nguoi-dung/them-nguoi-dung.component';
import { CapNhatNguoiDungComponent } from './quan-ly-nguoi-dung/cap-nhat-nguoi-dung/cap-nhat-nguoi-dung.component';
import { DangNhapAdminComponent } from './dang-nhap-admin/dang-nhap-admin.component';
import { HomeComponent } from '../home/home.component';
import { TrangChuModule } from '../home/trang-chu/trang-chu.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [AdminComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent, DanhSachPhimComponent, ThemphimComponent, SuaPhimComponent, DanhSachNguoiDungComponent, ThemNguoiDungComponent, CapNhatNguoiDungComponent, DangNhapAdminComponent],
  exports:[AdminComponent],
  imports: [
    CommonModule,AdminRoutingModule,
    MaterialModule,
    FormsModule, 
    TrangChuModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
