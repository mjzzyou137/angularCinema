import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../../../_core/services/quan-ly-phim.service'
import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { ShareService } from 'src/app/_core/share/share.service';
@Component({
  selector: 'app-dat-ve-home',
  templateUrl: './dat-ve-home.component.html',
  styleUrls: ['./dat-ve-home.component.scss']
})
export class DatVeHomeComponent implements OnInit {
  danhSachPhim: any;
  chiTietPhim: any;
  maPhim: any;
  trangThaiChonRap: boolean = true;
  trangThaiChonNgayChieu: boolean = true;
  trangThaiChonSuatChieu: boolean = true;
  ngayChieuGioChieu: any;
  maLichChieu: any;
  daDangNhapChua: object;
  constructor(private quanLyPhimServe: QuanLyPhimService,
    private router: Router,
    private shareService: ShareService) { }

  ngOnInit() {
    this.layDanhSachPhim()
  }
  layDanhSachPhim() {
    this.quanLyPhimServe.getListMovie().subscribe((data) => {
      this.danhSachPhim = data;
      console.log(data)
    })
  }
  ChonPhim(maPhim) {
    this.quanLyPhimServe.getDetailMovie(maPhim).subscribe((dataChiTiet) => {
      this.chiTietPhim = dataChiTiet;
      console.log(this.chiTietPhim)
      this.trangThaiChonRap = false;
      this.maPhim = maPhim;
    })
  }
  ChonRap() {
    this.trangThaiChonNgayChieu = false;
  }
  ChonNgayChieu(date, maLichChieu) {
    this.trangThaiChonSuatChieu = false;
    this.ngayChieuGioChieu = date;
    this.maLichChieu = maLichChieu;
    console.log(this.ngayChieuGioChieu)
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

