import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-bap-rang',
  templateUrl: './bap-rang.component.html',
  styleUrls: ['./bap-rang.component.scss']
})
export class BapRangComponent implements OnInit {
  @Input() DoAn: any;
  @Input() ItemChung: any;
  trangthai: boolean = false;
  TrangThaiDisabled: boolean = false;
  @Output() eventChonDoAn = new EventEmitter();
  @Output() eventGiamDoAn = new EventEmitter();
  GiaTienBap1: number = 0;
  GiaTienBap2: number = 0;
  GiaTienBap3: number = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.ItemChung)
  }
  XoaSanPham(ma) {
    for(let item of this.ItemChung){
      if(ma == item.Ma){
        if (this.DoAn.Ma == 1) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 40;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 40;
            item.SoLuong--;
          }
        } else if (this.DoAn.Ma == 2) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 45;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 45;
            item.SoLuong--;
          }
        } else if (this.DoAn.Ma == 3) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 60;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 60;
            item.SoLuong--;
          }
        }
      }
    }
    // if (this.DoAn.Ma == 1) {
    //   if (this.DoAn.SoLuong == 1) {
    //     this.TrangThaiDisabled = true;
    //     this.trangthai = false;
    //     this.DoAn.SoLuong--;
    //     this.DoAn.Gia -= 40;
    //   } else {
    //     this.trangthai = true;
    //     this.DoAn.SoLuong--;
    //     this.DoAn.Gia -= 40;
    //   }
    // } else if (this.DoAn.Ma == 2) {
    //   if (this.DoAn.SoLuong == 1) {
    //     this.TrangThaiDisabled = true;
    //     this.trangthai = false;
    //     this.DoAn.SoLuong--;
    //     this.DoAn.Gia -= 45;
    //   } else {
    //     this.trangthai = true;
    //     this.DoAn.SoLuong--;
    //     this.DoAn.Gia -= 45;
    //   }
    // } else if (this.DoAn.Ma == 3) {
    //   if (this.DoAn.SoLuong == 1) {
    //     this.TrangThaiDisabled = true;
    //     this.trangthai = false;
    //     this.DoAn.SoLuong--;
    //     this.DoAn.Gia -= 60;
    //   } else {
    //     this.trangthai = true;
    //     this.DoAn.SoLuong--;
    //     this.DoAn.Gia -= 60;
    //   }
    // }
    this.eventGiamDoAn.emit(this.DoAn.Ma)
  }
  ThemSanPham(ma) {
    for (let item of this.ItemChung) {
      if (ma == 1 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 40;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      } else if (ma == 2 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 45;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      } else if (ma == 3 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 60;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      }
    }
    const TrangThaiVaMa: any = {
      TrangThai: this.trangthai,
      Ma: ma,
    }
    this.eventChonDoAn.emit(TrangThaiVaMa)
  }
  // ThemSanPham(ma) {
  //   if (ma == 1) {
  //     this.TrangThaiDisabled = false;
  //     this.DoAn.Gia += 40;
  //     this.trangthai = true;
  //     this.DoAn.SoLuong++; 
  //     this.ItemChung.SoLuong++;
  //   } else if (ma == 2) {
  //     this.TrangThaiDisabled = false;
  //     this.DoAn.Gia += 45;
  //     this.trangthai = true;
  //     this.DoAn.SoLuong++; 
  //     this.ItemChung.SoLuong++;
  //   } else if (ma == 3) {
  //     this.TrangThaiDisabled = false;
  //     this.DoAn.Gia += 60;
  //     this.trangthai = true;
  //     this.DoAn.SoLuong++; 
  //     this.ItemChung.SoLuong++;
  //   }
  //   const TrangThaiVaMa: any = {
  //     TrangThai: this.trangthai,
  //     Ma: ma,
  //   }
  //   this.eventChonDoAn.emit(TrangThaiVaMa)
  // }

}
