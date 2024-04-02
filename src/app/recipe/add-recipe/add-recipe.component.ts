import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  productForm = this.fb.group({
    recipeName: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', [Validators.required, Validators.minLength(3)]],
    products: this.fb.array([]),
    image: ['', [Validators.pattern(/^https?:\/\//)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  products(): FormArray {
    return this.productForm.get("products") as FormArray
  }

  newProduct(): FormGroup {
    return this.fb.group({
      quantity: '',
      product: '',
    })
  }

  addQuantity() {
    this.products().push(this.newProduct());
  }

  removeQuantity(i: number) {
    this.products().removeAt(i);
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const {
      recipeName,
      category,
      products,
      image,
      description
    } = this.productForm.value;

    const formattedProducts = products ? products.map((product: any) => ({
      quantity: product.quantity,
      product: product.product
    })) : [];

    this.apiService.createRecipe(recipeName!, category!, formattedProducts, image!, description!)
      .subscribe(() => {
        this.router.navigate(['/recipes']);
      });
  }

}
