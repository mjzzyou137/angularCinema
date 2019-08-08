import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit {
  @Input() chiTietPhim:any; 
  @Input() maPhim:any;
  trangThaiChonNgayChieu:boolean = true;
  trangThaiChonSuatChieu:boolean = true;
  maLichChieu:any;
  ngayChieuGioChieu: any;
  statusButton:boolean = true;
  constructor(private router:Router) { }

  ngOnInit() { 
  }  
  ChonRap(){
    this.trangThaiChonNgayChieu = false;
  } 
  ChonNgayChieu(date, maLichChieu){
    this.trangThaiChonSuatChieu = false; 
    this.ngayChieuGioChieu = date;
    this.maLichChieu = maLichChieu;
  }
  DatVe(){
    this.statusButton = false;
  }
  datVe() {
    if (localStorage.getItem("userLoginFacebook") || localStorage.getItem("userLogin")) {
      this.router.navigate([`/home/dat-ve-phim`,
        this.maLichChieu
      ], { queryParams: { maPhim: this.maPhim } }).then(
        ()=>{window.scrollTo(0,900)}
      )
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
