import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from "../components/shop/shop.component";
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: true,
  imports: [CommonModule, ShopComponent, RouterModule]
})
export class HeroSectionComponent {}
