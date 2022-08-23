import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'http://images6.fanpop.com/image/photos/38500000/Teacup-Pig-Icon-pigs-38574677-128-128.jpg';
  image2 = 'https://64.media.tumblr.com/avatar_254038898035_128.pnj';
  image3 = 'https://i.pinimg.com/736x/be/67/29/be67294d9ba1a70b14060bd190714fa8.jpg';

  constructor() { }

  ngOnInit() {
  }

}