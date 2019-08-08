import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-dang-nhap-admin',
  templateUrl: './dang-nhap-admin.component.html',
  styleUrls: ['./dang-nhap-admin.component.scss']
})
export class DangNhapAdminComponent implements OnInit {

  constructor(private dataService:DataService,
    private router:Router) { }

  ngOnInit() {
  }
  DangNhap(value){
    const uri:string = `QuanLyNguoiDung/DangNhap?TaiKhoan=${value.TaiKhoan}&MatKhau=${value.MatKhau}`
    this.dataService.post(uri).subscribe((data)=>{
      console.log(data)
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
        Swal.fire({
          title: 'Tài khoản hoặc mật khẩu không đúng !',
          text: ' ',
          type: 'error',
          confirmButtonText: 'THỬ LẠI'
        })
      } else if(data.MaLoaiNguoiDung === "QuanTri"){
        Swal.fire(
          'ĐĂNG NHẬP THÀNH CÔNG',
          `XIN CHÀO ${data.TaiKhoan}`,
          'success'
        )  
        this.router.navigate(["/admin"])
      }  else {
        Swal.fire({
          title: 'Bạn không có quyền đăng nhập !',
          text: 'Do you want to continue',
          type: 'error',
          confirmButtonText: 'OK'
        })
        this.router.navigate(["/home"])
      }
      localStorage.setItem("userLogin",JSON.stringify(data))
    })
  }
}
