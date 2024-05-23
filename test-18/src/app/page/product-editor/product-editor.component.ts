import { Component, effect, inject, input } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CountrySelectorComponent } from 'icell-form-controls';
import { Product } from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-editor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountrySelectorComponent,
    JsonPipe,
  ],
  templateUrl: './product-editor.component.html',
  styleUrl: './product-editor.component.scss'
})
export class ProductEditorComponent {

  productService = inject(ProductService);

  router = inject(Router);

  id = input<number>(0);

  product = toSignal( this.productService.selected$ );

  productForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    price: new FormControl(0),
    category: new FormControl(''),
    origin: new FormControl(''),
  });

  constructor() {
    effect(() => {
      if (this.id() > 0) {
        this.productService.select(this.id());
      }
    });

    effect(() => {
      if (this.product() && this.product()!.id > 0) {
        this.productForm.patchValue(this.product()!);
      }
    });
  }

  onSave(): void {
    this.productService.update(this.productForm.value as Product);
    this.router.navigate(['/', 'products']);
  }
}
