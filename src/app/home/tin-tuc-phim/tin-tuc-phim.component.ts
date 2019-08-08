import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-tin-tuc-phim',
  templateUrl: './tin-tuc-phim.component.html',
  styleUrls: ['./tin-tuc-phim.component.scss']
})
export class TinTucPhimComponent implements OnInit {
  id:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  async ngOnInit() {
    await this.getParamsFromURL();
    console.log(this.id)
  }
  getParamsFromURL(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }
}
