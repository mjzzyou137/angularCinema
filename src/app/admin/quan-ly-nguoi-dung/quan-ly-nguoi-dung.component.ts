import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowCount } from 'rxjs/operators';

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss']
})
export class QuanLyNguoiDungComponent implements OnInit {

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
