import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'product/:param', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  // { path: '*', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
