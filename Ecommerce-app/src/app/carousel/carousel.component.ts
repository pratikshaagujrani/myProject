import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = 
  [
    'assets/images/ambi1.jpg',
    'assets/images/ambi2.jpg',
    'assets/images/j1.jpg'
  ];
  currentIndex = 0;

  prevSlide() 
  {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() 
  {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
