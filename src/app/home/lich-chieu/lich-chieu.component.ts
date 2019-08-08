import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {
  danhSachPhim: any;
  statusChonNgay: boolean = false;
  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getLishMovie()
  }
  getLishMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09"
    this.dataService.get(uri).subscribe((data) => {
      this.danhSachPhim = data;
      console.log(data)
    })
  }
  ChonPhim(id) {
    this.router.navigate(['/home/chi-tiet-phim', id]).then(
      () => { window.scrollTo(0, 0) }
    )
  }
}
