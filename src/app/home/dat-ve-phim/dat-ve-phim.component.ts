import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuanLyPhimService } from '../../_core/services/quan-ly-phim.service'
import { DataService } from 'src/app/_core/services/data.service';
import { GheComponent } from './ghe/ghe.component';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-dat-ve-phim',
  templateUrl: './dat-ve-phim.component.html',
  styleUrls: ['./dat-ve-phim.component.scss']
})
export class DatVePhimComponent implements OnInit {
  danhSachGhe: any;
  maLichChieu: any;
  soGheConTrong: number = 0;
  soGheDaDat: number = 0;
  soGheDangChon: any = [];
  trangThaiDatGhe: boolean = null
  id: any;
  chiTietPhim: any;
  tenRap: any;
  ngayChieuGioChieu: any;
  thoiLuong: any;
  giaVeKhongThayDoi: any;
  giaVe: number = 0;
  Gia: number = 0;
  TongTienDoAnThem: number = 0;
  TongTien: number = 0;
  TrangThaiDoAn: boolean = false;
  userNguoiDung: any;
  danhSachVe: any = [];
  @ViewChild(GheComponent, { static: false }) domLocal: GheComponent
  CacLoaiGhe: any = [
    { Ma: 1, LoaiGhe: "Ghế chưa chọn", ImgSrc: "./../../assets/chair/single-chair.png", MarginTop: "0px" },
    { Ma: 2, LoaiGhe: "Ghế đang chọn", ImgSrc: "./../../assets/chair/single-chair.png", MarginTop: "-44px" },
    { Ma: 3, LoaiGhe: "Ghế đã chọn", ImgSrc: "./../../assets/chair/single-chair.png", MarginTop: "-137px" }
  ]
  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) { }

  async ngOnInit() {
    await this.getParamsFromURL();
    await this.getDetailRoom();
    await this.getDetailMovie(); 
  }

  ClickGhe(itemGhe) {
    this.domLocal.danhSachGheLocal.push(itemGhe)
    console.log(itemGhe)
  }
  ChonGhe(obj) {
    if (obj.trangthai === true) {
      this.soGheConTrong--;
      this.soGheDaDat++;
      this.soGheDangChon.push(obj)
      for (let item of this.chiTietPhim.LichChieu) {
        if (item.MaLichChieu == this.maLichChieu) {
          this.tenRap = item.Rap;
          this.ngayChieuGioChieu = item.NgayChieuGioChieu;
          this.thoiLuong = item.ThoiLuong;
          this.giaVeKhongThayDoi = item.GiaVe / 1000;
        }
      }
      this.giaVe += this.giaVeKhongThayDoi;
      this.TongTien = this.giaVe
      console.log(this.giaVe)
    } else if (obj.trangthai === false) {
      let viTri = this.soGheDangChon.findIndex(item => {
        return obj.stt == item.STT
      })
      this.soGheDangChon.splice(viTri, 1)
      this.soGheConTrong++;
      this.soGheDaDat--;
      this.giaVe -= this.giaVeKhongThayDoi;
      this.TongTien = this.giaVe
    }
  }
  DatGhe() {
    if (this.soGheDangChon != '') {
      this.trangthainone = false;
      setTimeout(() => {
        this.trangThaiDatGhe = true;
      }, 2)
      this.TongTien = this.giaVe;
      this.TongTienDoAnThem = 0;
      this.TrangThaiDoAn = false;
    } else {
      Swal.fire({
        title: 'Vui lòng chọn ghế!',
        type: 'error',
        confirmButtonText: 'OK'
      })
    }
  }
  Close() {
    this.trangThaiDatGhe = false;
  }
  DatVe(obj) {
    this.danhSachVe.push(obj);
    console.log(this.danhSachVe)
  }
  CloseThanhToan() {
    localStorage.setItem("danhSachGheDaDatLocal", JSON.stringify(this.domLocal.danhSachGheLocal))
    Swal.fire(
      'ĐẶT VÉ THÀNH CÔNG',
      `   `,
      'success'
    )
    this.trangThaiDatGhe = false;
    this.trangthainone = true;
    if (localStorage.getItem("userLogin")) {
      this.userNguoiDung = JSON.parse(localStorage.getItem("userLogin"));
    } else {
      this.userNguoiDung = JSON.parse(localStorage.getItem("userLoginFacebook"));
    }
    console.log(this.userNguoiDung)
    setTimeout(() => {
      var ve = {
        MaLichChieu: this.maLichChieu,
        TaiKhoanNguoiDung: this.userNguoiDung.TaiKhoan,
        DanhSachVe: this.danhSachVe
      }
      const uri: string = "QuanLyDatVe/DatVe"
      this.dataService.post(uri, ve).subscribe((data) => {
        console.log(data)
      })
    }, 1)


  }

  getParamsFromURL() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.id = params;
      console.log(this.id)
      console.log(31231)
    })

  }
  ClickDoAnThem() {
    this.trangThaiDatGhe = false;
  }
  trangthainone = false;
  getDetailMovie() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id.params.maPhim}`
    this.dataService.get(uri).subscribe((data) => {
      this.chiTietPhim = data;
      console.log(data)
    })
  }
  getDetailRoom() {
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`
    this.dataService.get(uri).subscribe((data) => {
      this.danhSachGhe = data;
      this.soGheConTrong = this.danhSachGhe.DanhSachGhe.length;

      console.log(this.danhSachGhe)
    })
  }
  ChapNhanDoAn(objChapNhan) {
    this.trangThaiDatGhe = objChapNhan.trangthai;
    this.TongTienDoAnThem = objChapNhan.tongtien;
    this.TongTien = this.giaVe + this.TongTienDoAnThem;
    this.TrangThaiDoAn = true;
  }
  onNotify(value) {
    console.log(value)
    if(value === 60000){
      Swal.fire({
        position: 'center',
        type: 'warning',
        title: 'Thời gian đặt vé của bạn còn 1 phút',
        showConfirmButton: false,
        timer: 2000
      })
    } else if (value === 1000) {
      Swal.fire({
        position: 'center',
        type: 'warning',
        title: 'Bạn đã hết thời gian đặt vé',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(["/home/chi-tiet-phim",this.id.params.maPhim]).then(
        ()=>{window.scrollTo(0,0)}
      )
    }
  }
  QuayLai(){
    this.router.navigate(["/home/chi-tiet-phim",this.id.params.maPhim]).then(
      ()=>{window.scrollTo(0,0)}
    )
  }
  HuyDanhSachChon() {
    if (this.soGheDangChon.length == 0) {
      this.trangThaiDatGhe = false;
    } 
  }
}
