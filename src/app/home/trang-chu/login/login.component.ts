import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { ShareService } from 'src/app/_core/share/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  userFB: any;
  statusLogin: boolean = null;
  @Output() eventDangNhap = new EventEmitter()
  @Output() eventDangNhapFacebook = new EventEmitter()
  constructor(private dataService: DataService,
    private authService: AuthService,
    private shareService: ShareService, ) { }
  ngOnInit() {
    this.LocalStorage()
  }
  LocalStorage() {
    if (localStorage.getItem("userLogin")) {
      this.statusLogin = false;
    }
  }
  DangNhap(value) {
    const uri: string = `QuanLyNguoiDung/DangNhap?TaiKhoan=${value.TaiKhoan}&MatKhau=${value.Password}`
    this.dataService.post(uri).subscribe((data) => {
      console.log(data)
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
        Swal.fire({
          title: 'Tài khoản hoặc mật khẩu không đúng !',
          text: 'Thử lại !',
          type: 'error',
          confirmButtonText: 'OK'
        })
      } else {
        Swal.fire(
          'ĐĂNG NHẬP THÀNH CÔNG',
          `XIN CHÀO ${data.TaiKhoan}`,
          'success'
        )
        this.shareService.sharingUserLogin(value)
        localStorage.setItem("userLogin", JSON.stringify(data));
        const objDangNhap: object = {
          TrangThai: this.statusLogin,
          ThongTinNguoiDung: data,
        }
        this.eventDangNhap.emit(objDangNhap);
      }
    })
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }
  async signInWithFB() {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      const objFacebook: object = {
        TaiKhoan: user.name,
        MatKhau: user.id,
        Email: user.email,
        SoDT: user.photoUrl,
        MaNhom: "GP09",
        MaLoaiNguoiDung: "KhachHang"
      }
      const ng = {
        TaiKhoan: user.name,
        MatKhau: user.photoUrl,
        Email: user.email,
        SoDT: null,
        HoTen:user.name,
        MaNhom: "GP09",
        MaLoaiNguoiDung: "KhachHang"
      } 
      setTimeout(() => {
        const ui: string = "QuanLyNguoiDung/ThemNguoiDung"
        this.dataService.post(ui, ng).subscribe((data) => { 
          if(data === "Tài khoản đã tồn tại"){
            console.log("Đăng nhập ok")
          } else console.log("Đăng nhập được lun")
        })
      })

      if (user) {
        Swal.fire(
          'ĐĂNG NHẬP THÀNH CÔNG',
          `XIN CHÀO ${user.name}`,
          'success'
        ) 
        this.shareService.sharingUserLogin(objFacebook)

      }
      if (objFacebook) {

        this.eventDangNhapFacebook.emit(objFacebook);
      }
    });

  }

  signOut(): void {
    this.authService.signOut();
  }
}


