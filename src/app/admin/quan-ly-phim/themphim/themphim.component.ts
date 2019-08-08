import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
@Component({
  selector: 'app-themphim',
  templateUrl: './themphim.component.html',
  styleUrls: ['./themphim.component.scss']
})
export class ThemphimComponent implements OnInit {

  constructor(private dataService:DataService,
    private router:Router) { }

  ngOnInit() {
  }
  ThemPhim(value){  
    console.log(value)
    const uri:string = 'QuanLyPhim/ThemPhimMoi';
    this.dataService.post(uri,value).subscribe((data)=>{
      if (data) {
        Swal.fire(
          'THÊM PHIM THÀNH CÔNG',
          ``,
          'success'
        ).then(function(){
          window.location.reload()
        })
        this.router.navigate(['/admin'])
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          type: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
}
