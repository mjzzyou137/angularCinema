import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { distinct } from 'rxjs/operators';
@Component({
  selector: 'app-danh-sach-nguoi-dung',
  templateUrl: './danh-sach-nguoi-dung.component.html',
  styleUrls: ['./danh-sach-nguoi-dung.component.scss']
})
export class DanhSachNguoiDungComponent implements OnInit {
  listUser:any;
  p:number = 1;
  itemNguoiDung:any;
  constructor(private dataService:DataService,
    private router:Router) { }

  ngOnInit() {
    this.getListUser()
  }
  getListUser(){
    const uri:string ='QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09'
    this.dataService.get(uri).subscribe((data)=>{
      this.listUser = data;
      console.log(data)
    })
  }
  ChinhSua(item){
    this.itemNguoiDung = item;
  }
  Xoa(value){ 
    const uri:string = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${value}`
    this.dataService.delete(uri).subscribe((data)=>{
      if(data =="Xóa người dùng thành công"){
        Swal.fire(
          'XÓA THÀNH CÔNG',
          ` `,
          'success'
        ) .then( 
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
}
