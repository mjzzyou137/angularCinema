import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  statusSuaPhim:boolean = false;
  danhSachPhim:any;
  itemPhim:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getLishMovie()
  }

  getLishMovie(){
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09"
    this.dataService.get(uri).subscribe((data)=>{
      this.danhSachPhim = data;
      console.log(data)
    })
  } 
  XoaPhim(value){
    const uri:string = `QuanLyPhim/XoaPhim?MaPhim=${value}`
    this.dataService.delete(uri).subscribe((data)=>{
      if(data == "Xóa phim thành công!"){
        Swal.fire(
          'XÓA PHIM THÀNH CÔNG',
          ``,
          'success'
        ).then( 
          function(){
            window.location.reload()
          }
        )
      } else {
        Swal.fire({
          title: '',
          text: 'XÓA THẤT BẠI',
          type: 'error',
          confirmButtonText: 'THỬ LẠI'
        })
      }
    })
  }
  suaPhim(value){
    this.itemPhim = value;
  }
}
