import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  products: any[] = [
    {
      name: "Product 1",
      imageUrl: "https://i.pinimg.com/736x/81/43/c8/8143c8fcd833993aeaf3564db62c903d.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 20
    }
  ];
}
