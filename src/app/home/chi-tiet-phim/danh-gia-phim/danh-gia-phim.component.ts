  import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';


import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-danh-gia-phim',
  templateUrl: './danh-gia-phim.component.html',
  styleUrls: ['./danh-gia-phim.component.scss']
})
export class DanhGiaPhimComponent implements OnInit {
  rate: number = 0;
  @Input() id: any;
  soPhanTuDanhGia: number = 0;
  diemSoRate: number = 0;
  tyLeRate: number = 0;
  tyLeRateMain:number =0;
  ngDanhGia:number = 0 ;
  danhSachDanhGia: any = [];
  danhSachDanhGiaFake: any = [];
  danhSachDanhGiaFakeFull: any = []; 
  constructor() { }

  ngOnInit() {
    this.LocalStorage()
    this.danhSachDanhGia.map(item => {
      this.diemSoRate += item.Rating;
      this.soPhanTuDanhGia = this.danhSachDanhGia.length;
      this.tyLeRate = ((this.diemSoRate / this.soPhanTuDanhGia) * 100) / 5;
      this.tyLeRateMain =  Math.ceil(this.tyLeRate)
      this.ngDanhGia = this.danhSachDanhGia.length;
      console.log(this.ngDanhGia)
      console.log(this.tyLeRateMain)
    })
  }
  LocalStorage() {
    if (localStorage.getItem("danhSachDanhGia")) {
      this.danhSachDanhGiaFakeFull = JSON.parse(localStorage.getItem("danhSachDanhGia"));
      this.danhSachDanhGiaFakeFull.map(item => {
        if (this.id == item.id) {
          this.danhSachDanhGia.push(item) 
        } 
      }) 
    }
  }
  DanhGia(value) {
    if (localStorage.getItem("userLoginFacebook") || localStorage.getItem("userLogin")) {
      const obj = {
        HoTen: value.HoTen,
        id: this.id,
        Email: value.Email,
        Rating: value.rating,
        DanhGia: value.DanhGia,
      }  
      this.danhSachDanhGia.unshift(obj) 
      this.danhSachDanhGiaFakeFull.unshift(obj)
      localStorage.setItem("danhSachDanhGia", JSON.stringify(this.danhSachDanhGiaFakeFull))
    } else {
      Swal.fire({
        title: 'Bạn chưa đăng nhập!',
        text: '',
        type: 'error',
        confirmButtonText: 'OK'
      })
    }

  }
   
}
