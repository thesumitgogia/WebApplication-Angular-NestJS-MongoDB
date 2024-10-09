import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from "../shop/shop.component";
import { CartService } from './cart.service';
import { catchError, tap } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ShopComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService, private router: Router) { }
  demo: any[] = [
    {
      "name": "Golden Elegance Necklace",
      "price": "12,75,099.99",
      "description": "A delicate gold necklace with intricate patterns, perfect for adding a touch of luxury to any outfit.",
      "imageUrl": "https://i.pinimg.com/736x/81/43/c8/8143c8fcd833993aeaf3564db62c903d.jpg"
    },
    {
      "name": "Golden Elegance Necklace",
      "price": "12,75,099.99",
      "description": "A delicate gold necklace with intricate patterns, perfect for adding a touch of luxury to any outfit.",
      "imageUrl": "https://i.pinimg.com/736x/81/43/c8/8143c8fcd833993aeaf3564db62c903d.jpg"
    },
    {
      "name": "Golden Elegance Necklace",
      "price": "12,75,099.99",
      "description": "A delicate gold necklace with intricate patterns, perfect for adding a touch of luxury to any outfit.",
      "imageUrl": "https://i.pinimg.com/736x/81/43/c8/8143c8fcd833993aeaf3564db62c903d.jpg"
    },
    {
      "name": "Golden Elegance Necklace",
      "price": "12,75,099.99",
      "description": "A delicate gold necklace with intricate patterns, perfect for adding a touch of luxury to any outfit.",
      "imageUrl": "https://i.pinimg.com/736x/81/43/c8/8143c8fcd833993aeaf3564db62c903d.jpg"
    },
  ]

  products: any ;
  cartIds: any[] = [];
  error: any = null;

  ngOnInit(): void {
    this.fetchProfile();

  }

  removeFromCart(id: string): void {
    console.log("from ts", id);
    
    this.cartService.removeFromCart(id).pipe(
      tap(response => {
        // console.log('Response from API:', response);
        // this.profile = response
        console.log("Remove Products from cart: ", response);
        // reloadComponent() {
          // this.router.navigateByUrl('/cart', { skipLocationChange: true }).then(() => {
        // this.router.navigate([this.router.url]);
        this.fetchProfile();
          // });
        // this.products = response.products;
      }),
      catchError(error => {
        console.error('Error occurred:', error);
        this.error = 'Failed to load profile data.';
        return [];
      })
    ).subscribe()
  }

  

  fetchProfile(): void {
    this.cartService.addToCart("productId", "userId").pipe(
      tap(response => {
        // console.log('Response from API:', response);
        // this.profile = response
        console.log("Cart Products: ", response);

        this.products = response;
        this.cartIds = response.cartIds;
      }),
      catchError(error => {
        console.error('Error occurred:', error);
        this.error = 'Failed to load profile data.';
        return [];
      })
    ).subscribe();
  }


}
