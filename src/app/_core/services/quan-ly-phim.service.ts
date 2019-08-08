import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap,catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http:HttpClient) { }
  getListMovie():Observable<any>{
    const url="http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
    return this.http.get(url).pipe(
      tap(
        ()=>{},
        catchError(err=>{
          return this.handleErr(err);
        })
      )
    )
  }
  getDetailMovie(maPhim):Observable<any>{
    const url=
    `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    return this.http.get(url).pipe(
      tap( // Tap nhan 2 trang thai
        // Thanh cong thi ko ghi gi het
        () => {
          // Thuong viet loading trong day 
        },
        // That bai thi o duoi
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
  getPhongVe(maLichChieu){
    const url=`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    return this.http.get(url).pipe(
      tap(
        ()=>{},
        catchError(err =>{
          return this.handleErr(err);
        })
      )
    )
  }
  handleErr(err){
    // Du an thuc te neu co loi~
    // if(err.status === 405){
    //   alert(err.mes)
    // }
    return err;
  }
}
