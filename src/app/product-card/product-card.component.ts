import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ignoreElements } from 'rxjs/operators';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent{
@Input('product') product: Product;
@Input('show-actions') showActions = true;
  constructor(
    private cartService: ShoppingCartService
  ) { }

  addToCart(product: Product) {
      let cartId = localStorage.getItem('cartId');
      if(!cartId){
        this.cartService.create().then(res => {
          localStorage.setItem('cartId', res.key);
        })
      }else{

      }
  }
}