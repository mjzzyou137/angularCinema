import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-sua-phim',
  templateUrl: './sua-phim.component.html',
  styleUrls: ['./sua-phim.component.scss']
})
export class SuaPhimComponent implements OnInit {
  @Input() itemPhim: any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  SuaPhimMain(value) {
    const obj = {
      DanhGia: value.DanhGia,
      HinhAnh: value.HinhAnh,
      MaNhom: value.MaNhom,
      MoTa: value.MoTa,
      NgayKhoiChieu: value.NgayKhoiChieu,
      TenPhim: value.TenPhim,
      Trailer: value.Trailer,
      MaPhim:this.itemPhim.MaPhim,
    }
    const uri:string ='QuanLyPhim/CapNhatPhim'
    this.dataService.post(uri,obj).subscribe((data)=>{
      if (data) {
        Swal.fire(
          'SỬA PHIM THÀNH CÔNG',
          ``,
          'success', 
        ).then( 
          function(){
            window.location.reload()
          }
        )
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          type: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
}
