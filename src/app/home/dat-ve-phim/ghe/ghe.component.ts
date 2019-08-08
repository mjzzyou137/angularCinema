import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Params } from '@angular/router';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ItemGhe: any;
  @Output() eventDatGhe = new EventEmitter();
  @Output() eventDatVe = new EventEmitter();
  trangThaiDatGhe: boolean = false;
  STT: any;
  danhSachGheLocal: any = [];
  constructor() { }
  ngOnInit() {
    console.log(this.ItemGhe)
    // this.LocalStorage()
  }
  // LocalStorage() {
  //   if (localStorage.getItem("danhSachGheDaDatLocal")) {
  //     this.danhSachGheLocal = JSON.parse(localStorage.getItem("danhSachGheDaDatLocal"))
  //     console.log(this.danhSachGheLocal)
  //     for (let item of this.danhSachGheLocal) {
  //       if (item.MaGhe == this.ItemGhe.MaGhe) {
  //         this.ItemGhe.DaDat = true;
  //       }
  //     }
  //   } else {
  //     this.ItemGhe.DaDat= false;
  //   }
  // }

  ThemGhe() {
    if (this.ItemGhe.DaDat == false) {
      console.log(this.ItemGhe)
      this.trangThaiDatGhe = !this.trangThaiDatGhe;
      const obj = {
        trangthai: this.trangThaiDatGhe,
        stt: this.ItemGhe.STT
      }
      const obj2 = {
        MaGhe:this.ItemGhe.MaGhe,
        GiaVe:this.ItemGhe.GiaVe,
      }
      this.eventDatGhe.emit(obj)
      this.eventDatVe.emit(obj2)
    }
  }
}
