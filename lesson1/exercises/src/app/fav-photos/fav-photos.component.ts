import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://helios-i.mashable.com/imagery/articles/03oOVkx2zJp6HNKSkewdKIX/hero-image.fill.size_1200x900.v1623362910.jpg';
  image2 = 'https://media.istockphoto.com/photos/cute-wild-animal-loves-his-freedom-picture-id1136409899?k=20&m=1136409899&s=612x612&w=0&h=FxaUojNml9ijAqbwBN29teuQi84tbGD2KEI7iBQK9Hw=';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7Gnjb2hxZfXcJvCSQTCn1bHJwDUnUOby6t02W_Al&s';

  constructor() { }

  ngOnInit() {
  }

}