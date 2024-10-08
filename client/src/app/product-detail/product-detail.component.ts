import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './product-detail.service';
import { ProductComponent } from "../components/product/product.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productDetail: ProductDetailService) { }
  products: any;
  productId: string |null = null;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);

    const productIdFromRoute = Number(routeParams.get('param'));
  


    console.log(routeParams.get('param'))
    this.productId = routeParams.get('param');
    this.productDetail.getProducts(this.productId).subscribe({
      next: (data) => {
        this.products = data.product;
        console.log('Product:', this.products);
      },
      error: (error) => {
        console.error('Error fetching product:', error);
      }
    })

  }

}
