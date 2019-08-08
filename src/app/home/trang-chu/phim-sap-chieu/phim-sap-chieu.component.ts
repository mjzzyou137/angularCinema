import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
import { QuanLyPhimService } from '../../../_core/services/quan-ly-phim.service'
import { DataService } from 'src/app/_core/services/data.service';
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit { 
  DanhSachPhimSapChieu:any;
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
      
    }}
  constructor(private quanLyPhimService:QuanLyPhimService,
    private dataService:DataService) { }

  ngOnInit() {
    this.layDanhSachPhim();
  }
  
  layDanhSachPhim(){
    const uri="QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
    this.dataService.get(uri).subscribe((data)=>{
      this.DanhSachPhimSapChieu = data; 
    })
  }
}
