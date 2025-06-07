import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { StarRatingComponent } from "../star-rating/star-rating.component";

@Component({
  selector: 'app-product-card',
  imports: [StarRatingComponent],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();
}
