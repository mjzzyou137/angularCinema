import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/_core/services/data.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  DanhSachNguoiDungDangKy:any[] =[];
  @ViewChild('formDangKy',{static:true}) formDK:NgForm;

  constructor(private dataService:DataService) { }

  ngOnInit() {
  } 
  DangKy(value){
    const objNguoiDung = {
      TaiKhoan:value.TaiKhoan,
      MatKhau:value.Password,
      Email:value.Email,
      HoTen:value.HoTen,
      SoDT:value.SoDienThoai,
      MaNhom:"GP09",
      MaLoaiNguoiDung:"KhachHang"
    }
    const uri:string = "QuanLyNguoiDung/ThemNguoiDung"
    this.dataService.post(uri,objNguoiDung).subscribe((data)=>{
      if(data === "Tài khoản đã tồn tại"){
        Swal.fire({ 
          text: 'TÀI KHOẢN ĐÃ TỒN TẠI',
          type: 'error',
          confirmButtonText: 'THỬ LẠI'
        })
      } else {
        Swal.fire(
          'ĐĂNG KÝ THÀNH CÔNG',
          `    `,
          'success'
        )
      }
    })
  }
}
