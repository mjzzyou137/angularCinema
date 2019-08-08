import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit, AfterViewInit {
  @Input() ItemLoaiPhim: any;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.ItemLoaiPhim)
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
  ChonPhim(maPhim) {
    this.router.navigate(["/home/chi-tiet-phim", maPhim]).then(
      ()=>{window.scrollTo(0,0)}
    )
  }
}
