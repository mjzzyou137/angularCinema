import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {
trangThaiPhimDangChieu:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  HienPhimDangChieu(){
    this.trangThaiPhimDangChieu = true;
  }
  HienPhimSapChieu(){
    this.trangThaiPhimDangChieu = false;
  }
}
