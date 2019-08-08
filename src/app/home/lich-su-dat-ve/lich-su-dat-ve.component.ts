import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-lich-su-dat-ve',
  templateUrl: './lich-su-dat-ve.component.html',
  styleUrls: ['./lich-su-dat-ve.component.scss']
})
export class LichSuDatVeComponent implements OnInit {
  userNguoiDung:any;
  lichSuDatVe:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.LocalStorage()
  }
  LocalStorage(){
    if(localStorage.getItem("userLogin")){ 
      this.userNguoiDung = JSON.parse(localStorage.getItem("userLogin"));
    } else {
      this.userNguoiDung = JSON.parse(localStorage.getItem("userLoginFacebook"));
    }
    setTimeout(()=>{
      const user:string = this.userNguoiDung.TaiKhoan
      const uri:string =`QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${user}`
      this.dataService.post(uri).subscribe((dataa)=>{
        setTimeout(()=>{
          this.lichSuDatVe = dataa;
          console.log(this.lichSuDatVe)
        })
      })
    },1)
  }
}
