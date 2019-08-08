import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService } from "angularx-social-login";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { ShareService } from 'src/app/_core/share/share.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import '../../../../assets/js/shrink-navigation-menu-onscroll.js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  constructor(private authService:AuthService,
    private shareService:ShareService,
    private router:Router,
    private dataService:DataService) { }
  objRong:any;
  statusQuanTri:boolean = false;
  statusLogin:boolean = true;
  dataUser:object; 
  trangThaiClickUser: boolean = false;
  photoUrl:string = "";
  photoUrlFacebook:string ="";z
  @ViewChild(LoginComponent,{static:false}) dangXuat:LoginComponent
  ngOnInit() {
    this.LocalStorage();  
    this.LocalStorageFB();
  } 
  TrangChu(){
    this.router.navigate(['/home']).then(
      ()=>{window.scrollTo(0,0)}
    )
  }
  LichChieu(){
    this.router.navigate(['/home/lich-chieu']).then(
      ()=>{window.scrollTo(0,800)}
    )
  }
  LichSuDatVe(){
    this.router.navigate(['/home/lich-su-dat-ve'])
  }
  LocalStorage(){
    if(localStorage.getItem("userLogin")){
      this.statusLogin = false;
      this.photoUrl = "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png";
      this.dataUser = JSON.parse(localStorage.getItem("userLogin"));
    }
  }
  LocalStorageFB(){
    if(localStorage.getItem("userLoginFacebook")){
      this.statusLogin = false; 
      this.dataUser = JSON.parse(localStorage.getItem("userLoginFacebook"));
      this.photoUrl = JSON.parse(localStorage.getItem("avatarFacebook"))
    }
  }
  async DangNhap(objDangNhap){
    this.statusLogin = objDangNhap.TrangThai;
    this.dataUser = await objDangNhap.ThongTinNguoiDung;
    console.log(this.dataUser)
    this.trangThaiClickUser = false;
    this.photoUrl = "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
    localStorage.setItem("userLogin",JSON.stringify(objDangNhap.ThongTinNguoiDung))
  }
  async DangNhapFacebook(objFacebook){
    this.dataUser = await objFacebook;
    // console.log(objFacebook)
    this.statusLogin = false;
    // console.log(this.dataUser);
    this.photoUrl = await objFacebook.SoDT;
    console.log(this.photoUrl)
    this.trangThaiClickUser = false;
    localStorage.setItem("userLoginFacebook",JSON.stringify(objFacebook))
    localStorage.setItem("avatarFacebook",JSON.stringify(objFacebook.SoDT))
    console.log(this.photoUrlFacebook)
    console.log(objFacebook)
  }
  StatusQuanTri(){
    this.router.navigate(['/admin'])
  }
  clickUser(value) {
    if (this.trangThaiClickUser === false) {
      this.trangThaiClickUser = true; 
    } else {
      this.trangThaiClickUser = false; 
    }
    console.log(value)
    if(value === "KhachHang"){
      this.statusQuanTri = false;
    } else {
      this.statusQuanTri = true;
    }
  }
  signOut(){
    this.dataUser = {};
    this.statusLogin = true;
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userLoginFacebook");
    localStorage.removeItem("avatarFacebook")
    console.log(this.dataUser)
    Swal.fire(
      'ĐĂNG XUẤT THÀNH CÔNG'
    )
    this.router.navigate(["/home"]).then(()=>{
      window.scrollTo(0,0)
    })
      // this.shareService.shareUserLogin.subscribe((data)=>{ 
      //   this.objRong = data;
      //   setTimeout(()=>{
      //     console.log(this.objRong)
      //     this.objRong = {};
      //     data = this.objRong;
      //     console.log(data)
      //   },1)
      // })
  }
  thongTin(){
    this.router.navigate(['/home/nguoi-dung'])
  }
  UuDai(){
    this.router.navigate(["/home"]).then(
        ()=>{window.scrollTo(0,1350)}
      )
  }
  TinTuc(){
    this.router.navigate(["/home"]).then(
      ()=>{window.scrollTo(0,1550)}
    )
  }
}



// import { Component, OnInit } from '@angular/core';
// import { AuthService } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

// import { SocialUser } from "angularx-social-login";

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {
//   user:any; 
//   ngDung:any; 
//   loggedIn: boolean; 
//   trangThaiDangNhap: boolean = true;
//   trangThaiClickUser: boolean = false;
//   DanhSachNguoiDung: any;
//   constructor(private authService: AuthService) { }

//   ngOnInit() {
     
//     // this.authService.authState.subscribe((user) => { 
//     //   this.user = user; 
//     //   console.log(this.user)
//     //   this.loggedIn = (user != null);   
//     // }); 
     
    
//   }
//   signInWithGoogle(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }

//   signInWithFB() {
//     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
//     this.trangThaiDangNhap = false; 
//     this.authService.authState.subscribe((user) => { 
//       this.user = user;  
//       this.loggedIn = (user != null);
//       this.ngDung.splice(0,1)    
//       this.ngDung.push(this.user)   
//       console.log(this.ngDung) 
//     });  
//   }

//   signOut(): void {
//     this.authService.signOut();
//     this.trangThaiDangNhap = true;
//     this.trangThaiClickUser = false;
//   }
//   clickUser() {
//     if (this.trangThaiClickUser === false) {
//       this.trangThaiClickUser = true;
//     } else {
//       this.trangThaiClickUser = false;
//     }
//   }
//   DangNhap(value) {
//     if (localStorage.getItem("users") !== null) {
//       this.DanhSachNguoiDung = JSON.parse(localStorage.getItem("users"));
//     }
//     for(let item of this.DanhSachNguoiDung){
//       if(item.TaiKhoan == value.TaiKhoan && item.MatKhau == value.MatKhau){
//         this.trangThaiDangNhap = false;
//         const objNguoiDung = {
//           TaiKhoan:value.TaiKhoan,
//           MatKhau:value.MatKhau,
//           HoTen:item.HoTen,
//           PhotoURL: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
//         }
//         this.ngDung = objNguoiDung
//         console.log(this.ngDung)
//       } else alert("Sai tài khoản hoặc mật khẩu")
//     }
//   }
// }

