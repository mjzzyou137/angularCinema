import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { HomeRoutingModule } from './home-routing.module';
import { DatVePhimModule } from './dat-ve-phim/dat-ve-phim.module';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { TinTucPhimComponent } from './tin-tuc-phim/tin-tuc-phim.component';
import { MaterialModule } from '../_core/material/material.module';
import { FormsModule, RadioControlValueAccessor } from '@angular/forms';
import { DatVeComponent } from './chi-tiet-phim/dat-ve/dat-ve.component';
import { DanhGiaPhimComponent } from './chi-tiet-phim/danh-gia-phim/danh-gia-phim.component';
import { BarRatingModule } from '../../../node_modules/ngx-bar-rating/bundles/ngx-bar-rating.umd.js'
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { ItemLichChieuComponent } from './lich-chieu/item-lich-chieu/item-lich-chieu.component';
import { LichSuDatVeComponent } from './lich-su-dat-ve/lich-su-dat-ve.component';
import { NguoiDungComponent } from './nguoi-dung/nguoi-dung.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [HomeComponent, ChiTietPhimComponent, TinTucPhimComponent, DatVeComponent, DanhGiaPhimComponent,LichChieuComponent,ItemLichChieuComponent, NguoiDungComponent],
  exports: [HomeComponent, ChiTietPhimComponent, TinTucPhimComponent, DatVeComponent, DanhGiaPhimComponent,LichChieuComponent,ItemLichChieuComponent],
  imports: [
    CommonModule,
    TrangChuModule,
    HomeRoutingModule,
    DatVePhimModule,
    MaterialModule,
    FormsModule,
    BarRatingModule,
    Ng2SearchPipeModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      innerStrokeWidth: 8, 
      "unitsFontSize": "39",
      "unitsColor": "white",
      "titleFontSize": "39",
      "titleColor": "white",
      "outerStrokeGradient": true,
      "outerStrokeColor": "#379470",
      "outerStrokeGradientStopColor": "#fb4226",
      "innerStrokeColor": "#8dedbb",
      animationDuration:300,
      animation:true,
      responsive:true, 
      lazy: false,  
      showTitle:true,
      showSubtitle:false,
      outerStrokeWidth: 16,

    })
  ]
})
export class HomeModule { }
