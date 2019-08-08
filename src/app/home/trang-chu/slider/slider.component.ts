import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;  
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
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
}
