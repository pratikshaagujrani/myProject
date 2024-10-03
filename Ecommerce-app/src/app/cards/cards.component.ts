import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = 
  [
    {
      title: 'Up to 55% off',
      image: 'assets/images/ambi1.jpg',
      description: 'Get the best deals'
    },
    {
      title: 'Up to 60% off',
      image: 'assets/images/ambi2.jpg', 
      description: 'Amazing discounts'
    },
    {
      title: 'Up to 70% off',
      image: 'assets/images/j1.jpg', 
      description: 'Save big'
    },
    {
      title: 'Up to 80% off',
      image: 'assets/images/j2.jfif',
      description: 'Incredible offers'
    }
  ];
}