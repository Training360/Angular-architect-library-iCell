import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  productService = inject(ProductService);

  products = toSignal( this.productService.list$ );

  ngOnInit(): void {
    this.productService.load();
  }

}
