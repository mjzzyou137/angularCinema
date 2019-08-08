import { Component, OnInit } from '@angular/core';
import { TinTucService } from '../../../_core/services/tin-tuc.service'
@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {
  TinTuc:any;
  constructor(private tinTucService:TinTucService) { }

  ngOnInit() {
    this.LayDanhSachTinTuc()
  }
  LayDanhSachTinTuc(){
    this.TinTuc = this.tinTucService.layTinTuc() 
  }
}
