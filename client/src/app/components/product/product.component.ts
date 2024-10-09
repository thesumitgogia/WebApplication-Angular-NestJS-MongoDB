import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
})
export class ProductComponent implements OnInit {
  @Input() product: any = {
    name: '',
    imageUrl: '',
    description: '',
    price: '',
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  error: string = '';
  addProductToCart(productId: string): void {
    this.productService.addToCart(productId).pipe(
      tap(response => {
        console.log('Response from API:', response);
        // this.profile = response
        // this.products = response;
      }),
      catchError(error => {
        console.error('Error occurred:', error);
        this.error = 'Failed to load profile data.';
        return [];
      })
    ).subscribe();
  }
}
