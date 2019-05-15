import {Component, OnInit} from '@angular/core';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.sass']
})
export class ShoplistComponent implements OnInit {
  goods: object;

  constructor(private data: AjaxService) {
  }

  ngOnInit() {
    this.data.getGoods().subscribe(data => {
        this.goods = data;
        console.log(this.goods);
      }
    );
  }

  getStarsWidth(stars) {
    const starTotal = 5;
    const starPercentage = (stars / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    return starPercentageRounded;
  }

}
