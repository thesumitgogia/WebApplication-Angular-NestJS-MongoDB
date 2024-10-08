import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
