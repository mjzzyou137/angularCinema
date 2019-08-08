import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class AuthhGuard implements CanActivate {
  data: any;
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem("userLogin")) {
      this.data = JSON.parse(localStorage.getItem("userLogin"))
      console.log(123123)
      console.log(this.data)
    } else if(localStorage.getItem("userLoginFacebook")){
      this.data = JSON.parse(localStorage.getItem("userLoginFacebook"))
    }  else {
      this.router.navigate(["/dang-nhap"]) 
    }
    console.log(this.data.MaLoaiNguoiDung)
  
    if (this.data.MaLoaiNguoiDung === "QuanTri") { 
      // Swal.fire(
      //   'ĐĂNG NHẬP THÀNH CÔNG',
      //   ``,
      //   'success'
      // )  
      return true;
    } else if (this.data.MaLoaiNguoiDung === "KhachHang") {
      Swal.fire({
        title: 'Bạn không được phép truy cập',
        text: ' ',
        type: 'error',
        confirmButtonText: 'THỬ LẠI'
      })
      this.router.navigate(["/home"])
    } 

  }
}

// else if(localStorage.getItem("userLogin") || localStorage.getItem("userLoginFacebook")){
//   Swal.fire({
//     title: 'Vui lòng đăng nhập',
//     text: ' ',
//     type: 'error',
//     confirmButtonText: 'THỬ LẠI'
//   })
//   this.router.navigate(["/dang-nhap"]);
//   return false;
// } 