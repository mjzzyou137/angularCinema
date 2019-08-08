import { Component, OnInit, AfterViewInit, ɵConsole, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { QuanLyPhimService } from '../../_core/services/quan-ly-phim.service'
import { ActivatedRoute } from '@angular/router'
import { DataService } from 'src/app/_core/services/data.service';
import $ from 'jquery';
declare var $: any;
import { Router } from '@angular/router'
import '../../../assets/js/jquery.magnific-popup.min.js'
import '../../../assets/css/magnific-popup.css'
import { DanhGiaPhimComponent } from './danh-gia-phim/danh-gia-phim.component';
@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit, AfterViewInit {
  id: any;
  chiTietPhim: any;
  lichChieu: any;
  thoiLuong: any;
  danhSachPhim: any;
  tenPhim: any;
  ngayChieu: any;
  suatChieu: any;
  trangThaiChonRap: boolean = true;
  trangThaiChonNgayChieu: boolean = true;
  trangThaiChonSuatChieu: boolean = true;
  maPhim: any;
  tyLeRate: number = 0;
  danhSachNguoiDanhGia:number =0;
  @ViewChild(DanhGiaPhimComponent, { static: false }) domTyLe: DanhGiaPhimComponent
  // @ViewChildren(DanhGiaPhimComponent) tagList: QueryList<DanhGiaPhimComponent>
  constructor(private quanLyPhimService: QuanLyPhimService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getParamsFromURL()
    this.layChiTietPhim();
    // this.layDanhSachPhim()
    this.ViewChildren()
  }
  ViewChildren(){
    setTimeout(()=> {
      console.log(this.domTyLe.tyLeRateMain); // OK
      this.tyLeRate = this.domTyLe.tyLeRateMain
      this.danhSachNguoiDanhGia = this.domTyLe.ngDanhGia;
  }, 1); 
  }
  ngAfterViewInit() {
    $('.video').magnificPopup({
      type: 'iframe',


      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=',

            src: '//www.youtube.com/embed/%id%?autoplay=1'

          }
        }
      }
    });
  }
  getParamsFromURL() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }
  layChiTietPhim() {
    const uri: string = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`
    this.dataService.get(uri).subscribe((data) => {
      this.chiTietPhim = data;  
      this.maPhim = this.id;
      setTimeout(()=>{
        for(let item of this.chiTietPhim.LichChieu){
          this.thoiLuong = item.ThoiLuong;
          console.log(this.thoiLuong)
        }
      },1)
    })
  }
  // layDanhSachPhim() {
  //   this.quanLyPhimService.getListMovie().subscribe((data) => {
  //     this.danhSachPhim = data;
  //     console.log(data)
  //   })
  // }
  // ChonPhim(maPhim, tenPhim) {
  //   this.quanLyPhimService.getDetailMovie(maPhim).subscribe((dataChiTiet) => {
  //     console.log(dataChiTiet);
  //     this.chiTietPhim = dataChiTiet;
  //     console.log(this.chiTietPhim)
  //     this.trangThaiChonRap = false;
  //     this.maPhim = maPhim;
  //     console.log(this.maPhim)
  //   })
  // }
  ChonRap() {
    this.trangThaiChonNgayChieu = false;
  }
  ChonNgayChieu(ngayChieu) {
    this.trangThaiChonSuatChieu = false;
    this.ngayChieu = ngayChieu.substring(10, 0)
    console.log(this.ngayChieu)
  }
  datVe(maLichChieu, giaVe, GioChieu, thoiLuong, rap) {
    this.suatChieu = GioChieu.substring(11, 20)
    this.router.navigate([`/home/chi-tiet-phim/${this.maPhim}/dat-ve-phim`, maLichChieu
    ]).then(
      ()=>{window.scrollTo(0,850)}
    )
  }
}
