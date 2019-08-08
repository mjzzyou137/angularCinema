import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-item-tin-tuc',
  templateUrl: './item-tin-tuc.component.html',
  styleUrls: ['./item-tin-tuc.component.scss']
})
export class ItemTinTucComponent implements OnInit {
  @Input() ItemTinTuc:any;
    constructor(private router:Router) { }

  ngOnInit() { 
  }
  ChonTinTuc(id){ 
    this.router.navigate(["/home/tin-tuc-phim",id]).then(
      ()=>{window.scrollTo(0,750)}
    )
  }
}
