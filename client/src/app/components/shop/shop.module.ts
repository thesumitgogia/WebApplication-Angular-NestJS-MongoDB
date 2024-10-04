import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductComponent } from '../product/product.component'; // Adjust the path as necessary

@NgModule({
    declarations: [
        ProductComponent // Ensure ProductComponent is declared here
    ],
    imports: [
        CommonModule
    ]
})
export class ShopModule { }
