import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { RecipeEdit } from 'src/app/types/recipe';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  idRecipe: string = ''
  recipe: RecipeEdit = {
    recipeName: '',
    category: '',
    products: [],
    image: '',
    description: '',
  };

  productForm = this.fb.group({
    recipeName: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', [Validators.required, Validators.minLength(3)]],
    products: this.fb.array([]),
    image: ['', [Validators.pattern(/^https?:\/\//)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private apiService: ApiService, private activeRoute: ActivatedRoute, private router: Router, private userService: UserService) {
  const { _id } = this.userService.user! || {};

    this.activeRoute.params.subscribe((data) => {
      const id = data['recipeId'];
      this.idRecipe = id;
      this.apiService.getRecipe(id).subscribe((recipe) => {

        if (_id != undefined && _id !== recipe.userId._id) {
          this.router.navigate(['recipes', id]);
        }

        this.productForm.patchValue({
          recipeName: recipe.recipeName,
          category: recipe.category,
          image: recipe.image,
          description: recipe.description
        });

        recipe.products.forEach((product: any) => {
          this.addProduct(product.quantity, product.product);
        });
      });
    });
  }

  addProduct(quantity: string, product: string) {
    const productsArray = this.productForm.get('products') as FormArray;
    productsArray.push(this.newProduct(quantity, product));
  }

  products(): FormArray {
    return this.productForm.get("products") as FormArray
  }

  newProduct(quantity: string | null = null, product: string | null = null): FormGroup {
    return this.fb.group({
      quantity: [quantity],
      product: [product],
    });
  }


  addQuantity() {
    this.products().push(this.newProduct());
  }

  removeQuantity(i: number) {
    this.products().removeAt(i);
  }

  onEdit() {
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

    this.apiService.updateRecipe(this.idRecipe, recipeName!, category!, formattedProducts, image!, description!)
      .subscribe(() => {
        this.router.navigate(['/recipes']);
      });
  }
}
