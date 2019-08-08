import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {
  statusQuanLyPhim:boolean = true;
  statusQuanLyUser:boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  QuanLyPhim(){
    this.router.navigate(['/admin'])
  }
  QuanLyNguoiDung(){
    this.router.navigate(['/admin/quan-ly-nguoi-dung'])
  }
  LogoAdmin(){
    this.router.navigate(['/admin']).then(()=>{
      window.scrollTo(0,0);
    })
  }
}
