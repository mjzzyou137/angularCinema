import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-cap-nhat-nguoi-dung',
  templateUrl: './cap-nhat-nguoi-dung.component.html',
  styleUrls: ['./cap-nhat-nguoi-dung.component.scss']
})
export class CapNhatNguoiDungComponent implements OnInit {
  @Input() itemNguoiDung: any;
  value:string = 'KhachHang';
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  ChinhSua(value) {
    const obj = {
      TaiKhoan: this.itemNguoiDung.TaiKhoan,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDienThoai,
      HoTen:value.HoTen,
      MaNhom: "GP09",
      MaLoaiNguoiDung: this.value,
    };
    const uri:string ="QuanLyNguoiDung/CapNhatThongTin"
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
        ).then( 
          function(){
            window.location.reload()
          }
        )
      }
    })
  }
  selectOption(value) {
    this.value = value;
    console.log(this.value)
  }
}
