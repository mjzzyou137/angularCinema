import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatDoAnComponent } from './dat-do-an.component';
import { BapRangComponent } from './bap-rang/bap-rang.component';
import { NuocNgotComponent } from './nuoc-ngot/nuoc-ngot.component';

@NgModule({
  declarations: [DatDoAnComponent, BapRangComponent, NuocNgotComponent],
  exports : [DatDoAnComponent,BapRangComponent],
  imports: [
    CommonModule
  ]
})
export class DatDoAnModule { } 