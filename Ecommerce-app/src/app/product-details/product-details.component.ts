import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products = 
  [
    { icon: 'assets/images/ambi1.jpg', title: 'Product 1' },
    { icon: 'assets/images/j1.jpg', title: 'Product 2' },
    { icon: 'assets/images/j2.jfif', title: 'Product 3' },
    { icon: 'assets/images/ambi1.jpg', title: 'Product 4' },
    { icon: 'assets/images/ambi2.jpg', title: 'Product 5' },
    { icon: 'assets/images/j2.jfif', title: 'Product 6' }
  ];

  infos = 
  [
    { icon: 'assets/images/ambi1.jpg', title: 'Free Shipping' },
    { icon: 'assets/images/j1.jpg', title: '24/7 Support' },
    { icon: 'assets/images/j2.jfif', title: 'Secure Payment' },
    { icon: 'assets/images/ambi2.jpg', title: 'Easy Returns' }
  ];
}