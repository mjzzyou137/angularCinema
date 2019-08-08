import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-item-uu-dai',
  templateUrl: './item-uu-dai.component.html',
  styleUrls: ['./item-uu-dai.component.scss']
})
export class ItemUuDaiComponent implements OnInit {
  @Input() ItemUuDai:any;
  constructor() { }

  ngOnInit() {
  }

}
