import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-item-lich-chieu',
  templateUrl: './item-lich-chieu.component.html',
  styleUrls: ['./item-lich-chieu.component.scss']
})
export class ItemLichChieuComponent implements OnInit {
  trangThaiChonNgay:boolean = null;
  chiTietPhim:any;
  thoiLuong:any;
  maPhim:any;
  maLichChieu:any;
  constructor(private dataService:DataService,
    private quanLyPhimService:QuanLyPhimService,
    private router:Router) { }
  @Input() ItemLichChieu:any;
  ngOnInit() { 
  } 
  ChonNgayChieu(maPhim){
    this.trangThaiChonNgay = !this.trangThaiChonNgay;
    this.quanLyPhimService.getDetailMovie(maPhim).subscribe((dataChiTiet)=>{
      this.chiTietPhim = dataChiTiet;
      console.log(dataChiTiet) 
     
    })
  }
  ChonSuatChieu(maPhim,maLichChieu){
    this.maLichChieu = maLichChieu;
    this.maPhim = maPhim
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
