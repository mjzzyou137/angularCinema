import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/_core/services/data.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-them-nguoi-dung',
  templateUrl: './them-nguoi-dung.component.html',
  styleUrls: ['./them-nguoi-dung.component.scss']
})
export class ThemNguoiDungComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  ThemNguoiDung(value) {
    const obj = {
      TaiKhoan : value.TaiKhoan,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDienThoai,
      HoTen: value.HoTen,
      MaNhom: `GP09`,
      MaLoaiNguoiDung: `KhachHang`, 
    }
    const uri:string = "QuanLyNguoiDung/ThemNguoiDung"
    this.dataService.post(uri,obj).subscribe((data)=>{
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
