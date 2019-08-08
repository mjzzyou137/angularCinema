import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVePhimComponent } from './dat-ve-phim.component';
import { GheComponent } from './ghe/ghe.component';
import { DatDoAnModule } from './dat-do-an/dat-do-an.module';
import { DatVePhimRoutingModule } from './dat-ve-phim-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { CountdownModule } from 'ngx-countdown';
@NgModule({
  declarations: [DatVePhimComponent, GheComponent],
  exports:[DatVePhimComponent],
  imports: [
    CommonModule,
    DatDoAnModule,
    DatVePhimRoutingModule,
    SweetAlert2Module,
    TrangChuModule,
    CountdownModule
  ]
})
export class DatVePhimModule { }
