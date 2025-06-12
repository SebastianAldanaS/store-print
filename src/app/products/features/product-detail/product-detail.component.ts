import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { StarRatingComponent } from "../../ui/star-rating/star-rating.component";


@Component({
  selector: 'app-product-detail',
  imports: [StarRatingComponent],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {

  productDetailStateService = inject(ProductDetailStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailStateService.getById(this.id());
    });
  }
}
