import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dat-do-an',
  templateUrl: './dat-do-an.component.html',
  styleUrls: ['./dat-do-an.component.scss']
})
export class DatDoAnComponent implements OnInit {
  [x: string]: any;
  ItemBapRang: any = [
    { Ten: "BẮP RANG 60OZ", GioiThieu: "Bắp rang 60oz", Gia: 0, Ma: 1, SoLuong: 0, GiaKhongSuaDuoc: 40000 },
    { Ten: "BẮP RANG 60OZ - CARAMEL", GioiThieu: "Bắp rang 60oz - Caramel", Gia: 0, Ma: 2, SoLuong: 0, GiaKhongSuaDuoc: 45000 },
    { Ten: "BẮP RANG 60OZ - PHÔ MAI", GioiThieu: "Bắp rang 60oz - Phô mai", Gia: 0, Ma: 3, SoLuong: 0, GiaKhongSuaDuoc: 60000 },
  ]
  ItemNuocNgot: any = [
    { Ten: "COKE 22OZ", GioiThieu: "Coke 22oz", Gia: 0, Ma: 4, SoLuong: 0, GiaKhongSuaDuoc: 21000 },
    { Ten: "COKE 32OZ", GioiThieu: "Coke 32oz", Gia: 0, Ma: 5, SoLuong: 0, GiaKhongSuaDuoc: 25000 },
    { Ten: "FANTA 22OZ", GioiThieu: "Fanta 22oz", Gia: 0, Ma: 6, SoLuong: 0, GiaKhongSuaDuoc: 21000 },
    { Ten: "FANTA 32OZ", GioiThieu: "Fanta 32oz", Gia: 0, Ma: 7, SoLuong: 0, GiaKhongSuaDuoc: 25000 },
    { Ten: "SPRITE 22OZ", GioiThieu: "Sprite 22oz", Gia: 0, Ma: 8, SoLuong: 0, GiaKhongSuaDuoc: 21000 },
    { Ten: "SPRITE 32OZ", GioiThieu: "Sprite 32oz", Gia: 0, Ma: 9, SoLuong: 0, GiaKhongSuaDuoc: 25000 },
  ]
  ItemChung: any = [
    { Ten: "BẮP RANG 60OZ", GioiThieu: "Bắp rang 60oz", Gia: 0, Ma: 1, SoLuong: 0, GiaKhongSuaDuoc: 40000 },
    { Ten: "BẮP RANG 60OZ - CARAMEL", GioiThieu: "Bắp rang 60oz - Caramel", Gia: 0, Ma: 2, SoLuong: 0, GiaKhongSuaDuoc: 45000 },
    { Ten: "BẮP RANG 60OZ - PHÔ MAI", GioiThieu: "Bắp rang 60oz - Phô mai", Gia: 0, Ma: 3, SoLuong: 0, GiaKhongSuaDuoc: 60000 },
    { Ten: "COKE 22OZ", GioiThieu: "Coke 22oz", Gia: 0, Ma: 4, SoLuong: 0, GiaKhongSuaDuoc: 21000 },
    { Ten: "COKE 32OZ", GioiThieu: "Coke 32oz", Gia: 0, Ma: 5, SoLuong: 0, GiaKhongSuaDuoc: 25000 },
    { Ten: "FANTA 22OZ", GioiThieu: "Fanta 22oz", Gia: 0, Ma: 6, SoLuong: 0, GiaKhongSuaDuoc: 21000 },
    { Ten: "FANTA 32OZ", GioiThieu: "Fanta 32oz", Gia: 0, Ma: 7, SoLuong: 0, GiaKhongSuaDuoc: 25000 },
    { Ten: "SPRITE 22OZ", GioiThieu: "Sprite 22oz", Gia: 0, Ma: 8, SoLuong: 0, GiaKhongSuaDuoc: 21000 },
    { Ten: "SPRITE 32OZ", GioiThieu: "Sprite 32oz", Gia: 0, Ma: 9, SoLuong: 0, GiaKhongSuaDuoc: 25000 },

  ] 
  TongTienDoAn: number = 0; 
  TrangThaiChapNhan:boolean = false;
  @Output() eventChonDoAn = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
    console.log(this.ItemChung)
  }
  TongTien(TrangThaiVaMa) {
    if (TrangThaiVaMa.Ma == 1) {
      this.TongTienDoAn += 40;
    } else if (TrangThaiVaMa.Ma == 2) {
      this.TongTienDoAn += 45;
    } else if (TrangThaiVaMa.Ma == 3) {
      this.TongTienDoAn += 60;
    } else if (TrangThaiVaMa.Ma == 4) {
      this.TongTienDoAn += 21;
    } else if (TrangThaiVaMa.Ma == 5) {
      this.TongTienDoAn += 25;
    } else if (TrangThaiVaMa.Ma == 6) {
      this.TongTienDoAn += 21;
    } else if (TrangThaiVaMa.Ma == 7) {
      this.TongTienDoAn += 25;
    } else if(TrangThaiVaMa.Ma == 8){
      this.TongTienDoAn += 21;
    } else {
      this.TongTienDoAn +=25;
    } 
  }
  TongTienGiamDi(ma) {
    if (ma == 1) {
      this.TongTienDoAn -= 40;
    } else if (ma == 2) {
      this.TongTienDoAn -= 45;
    } else if (ma == 3) {
      this.TongTienDoAn -= 60;
    } else if (ma == 4) {
      this.TongTienDoAn -= 21;
    } else if (ma == 5) {
      this.TongTienDoAn -= 25;
    } else if (ma == 6) {
      this.TongTienDoAn -= 21;
    } else if (ma == 7) {
      this.TongTienDoAn -= 25;
    } else if (ma == 8) {
      this.TongTienDoAn -= 21;
    } else if (ma == 9) {
      this.TongTienDoAn -= 25;
    } 
  }
  ChapNhanDoAn(){
    this.TrangThaiChapNhan = true;
    const objChapNhan = {
      trangthai:this.TrangThaiChapNhan,
      tongtien:this.TongTienDoAn
    }
    this.eventChonDoAn.emit(objChapNhan); 
  } 
  
}
