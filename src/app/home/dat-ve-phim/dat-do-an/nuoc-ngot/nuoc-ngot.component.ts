import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuoc-ngot',
  templateUrl: './nuoc-ngot.component.html',
  styleUrls: ['./nuoc-ngot.component.scss']
})
export class NuocNgotComponent implements OnInit {
  @Input() DoAn: any;
  @Input() ItemChung: any;
  trangthai: boolean = false;
  TrangThaiDisabled: boolean = false;
  @Output() eventChonDoAn = new EventEmitter();
  @Output() eventGiamDoAn = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
    console.log(this.ItemChung)
  }
  XoaSanPham(ma) {
    for(let item of this.ItemChung){
      if(ma == item.Ma){
        if (this.DoAn.Ma == 4) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 21;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 21;
            item.SoLuong--;
          }
        } else if (this.DoAn.Ma == 5) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 25;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 25;
            item.SoLuong--;
          }
        } else if (this.DoAn.Ma == 6) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 21;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 21;
            item.SoLuong--;
          } 
        } else if (this.DoAn.Ma == 7) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 25;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 25;
            item.SoLuong--;
          }
        } else if (this.DoAn.Ma == 8) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 21;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 21;
            item.SoLuong--;
          }
        } else if (this.DoAn.Ma == 9) {
          if (this.DoAn.SoLuong == 1) {
            this.TrangThaiDisabled = true;
            this.trangthai = false;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 25;
            item.SoLuong--;
          } else {
            this.trangthai = true;
            this.DoAn.SoLuong--;
            this.DoAn.Gia -= 25;
            item.SoLuong--;
          } 
        } 
      }
    }
    this.eventGiamDoAn.emit(this.DoAn.Ma)
  }
  ThemSanPham(ma) {
    for (let item of this.ItemChung) {
      if (ma == 4 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 21;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      } else if (ma == 5 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 25;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      } else if (ma == 6 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 21;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      } else if (ma == 7 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 25;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      } else if (ma == 8 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 21;
        this.trangthai = true;
        this.DoAn.SoLuong++;
        item.SoLuong++;
      } else if (ma == 9 && ma == item.Ma) {
        this.TrangThaiDisabled = false;
        this.DoAn.Gia += 25;
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
