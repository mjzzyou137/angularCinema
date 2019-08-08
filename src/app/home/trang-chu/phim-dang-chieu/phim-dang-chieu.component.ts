import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
import { QuanLyPhimService } from '../../../_core/services/quan-ly-phim.service'
import { DataService } from '../../../_core/services/data.service';
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit { 
  DanhSachPhimDangChieu: any
  constructor(private quanLyPhimService: QuanLyPhimService,
    private dataService: DataService) { }
  option: any = {
    loop: true,
    items: 5, dots: false, navigation: false,
    autoplay: true,
    responsive: {
      400: {
        items: 1,
        dots: true, 
        navText: ['', ''],
      },
      600:{
        items:2,
        dots: true, 
        navText: ['', ''],
      },
      740: {
        items: 4
      }, 
      992:{
        items:5
      }
      
    },
  }
  ngOnInit() {
    this.layDanhSachPhim();
  } 
  layDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09"
    this.dataService.get(uri).subscribe((data) => {
      this.DanhSachPhimDangChieu = data; 
    }) 
  }
}
