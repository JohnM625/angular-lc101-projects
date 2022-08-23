import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favLinks = ['https://s.abcnews.com/images/Lifestyle/AP_micro_pigs_10_sr_140319_1x1_1600.jpg', 'https://i.pinimg.com/236x/e7/a5/48/e7a548ac373e6092ca388444d83e3587--little-pigs-little-babies.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
