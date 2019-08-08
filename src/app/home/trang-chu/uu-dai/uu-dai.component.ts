import { Component, OnInit } from '@angular/core';
import $ from 'jquery'; 
declare var $:any; 
@Component({
  selector: 'app-uu-dai',
  templateUrl: './uu-dai.component.html',
  styleUrls: ['./uu-dai.component.scss']
})
export class UuDaiComponent implements OnInit {
  DanhSachUuDai:any = [ 
    {HinhAnh:"../../../../assets/image/uuDaiTinTuc/uuDai/1.jpg"},
    {HinhAnh:"../../../../assets/image/uuDaiTinTuc/uuDai/2.jpg"},
    {HinhAnh:"../../../../assets/image/uuDaiTinTuc/uuDai/3.jpg"},
    {HinhAnh:"../../../../assets/image/uuDaiTinTuc/uuDai/4.jpg"},
    {HinhAnh:"../../../../assets/image/uuDaiTinTuc/uuDai/5.jpg"},
  ]
  option: any = {
    loop: true,
    items: 3, dots: true, navigation: false,
    autoplay: true,
    responsive: {
      400: {
        items: 1, 
      },
      600:{
        items:2, 
      }, 
      992:{
        items:3
      }
      
    }}
  constructor() { }

  ngOnInit() {
  } 
}
