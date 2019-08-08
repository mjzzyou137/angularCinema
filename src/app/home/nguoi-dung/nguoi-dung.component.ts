import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
@Component({
  selector: 'app-nguoi-dung',
  templateUrl: './nguoi-dung.component.html',
  styleUrls: ['./nguoi-dung.component.scss']
})
export class NguoiDungComponent implements OnInit {

  constructor(private dataService:DataService,
    private router:Router) { }
  user: any;
  userFb:any;
  dkSwitch:number = 1;
  statusThongTin:boolean = false;
  statusBaoMat:boolean = false;
  ngOnInit() {
    this.LocalStorage()
  }
  LocalStorage() {
    if (localStorage.getItem("userLogin")) {
      this.user = JSON.parse(localStorage.getItem("userLogin"));
    } else if (localStorage.getItem("userLoginFacebook")) {
      this.user = JSON.parse(localStorage.getItem("userLoginFacebook"))
      this.userFb = JSON.parse(localStorage.getItem("userLoginFacebook"))
      console.log(this.userFb)
    }
  }
  ChinhSua(value) {
    const obj = {
      TaiKhoan: this.user.TaiKhoan,
      MatKhau:value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDienThoai,
      HoTen: value.HoTen,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    }
    const uri: string = "QuanLyNguoiDung/CapNhatThongTin"
    this.dataService.post(uri,obj).subscribe((data)=>{
      if(data == "Tài khoản không tồn tại"){
        Swal.fire({
          title: '',
          text: 'SỬA THÔNG TIN THẤT BẠI',
          type: 'error',
          confirmButtonText: 'THỬ LẠI'
        })
      } else {
        Swal.fire(
          'SỬA THÔNG TIN THÀNH CÔNG',
          ``,
          'success'
        )
      }
    })
  }
  ThongTin(){
    this.dkSwitch = 2;
    this.statusBaoMat = false;
    this.statusThongTin = !this.statusThongTin
  }
  BaoMat(){
    this.statusBaoMat = true;
    this.dkSwitch = 3;
    this.statusThongTin = false;
  }
  LichSuDatVe(){
    this.router.navigate(['/home/lich-su-dat-ve'])
  }
  Thoat(){
    this.router.navigate(['/home'])
  }
}
