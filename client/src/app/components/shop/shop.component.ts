import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  standalone: true,
  imports: [CommonModule, ProductComponent, NgFor, NgForOf]
})
export class ShopComponent implements OnInit {
  constructor(private shopService: ShopService) { }
  samleProducts: any[] = [
    {
      _id: 'rxh3n',
      name: "Product 1456",
      imageUrl: "https://i.pinimg.com/736x/81/43/c8/8143c8fcd833993aeaf3564db62c903d.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 20
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    },
    {
      name: "Product 2",
      imageUrl: "https://i.pinimg.com/736x/25/ab/05/25ab0547a794a4765953559b3d4ad583.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip",
      price: 30
    }
  ];
  products: any[] = [];

  ngOnInit(): void {
    console.log("Yes");
    
    this.shopService.getProducts().subscribe({
      next: (data) => {
        this.products = data; // Assign the received data to the products variable
        console.log('Products:', this.products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  // trackById(index: number, item: any): number {
  //   return item.id; // Assuming each item has a unique ID
  // }
}
