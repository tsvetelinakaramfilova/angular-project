import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent {
  recipes: Recipe[] | null = null;
  isLoading: boolean = true;
  noRecipes: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes

        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }

  search(form: NgForm) {
    if (form.invalid) {
      window.location.reload();
    }

    const { searchText } = form.value;

    this.apiService.searchRecipe(searchText).subscribe((recipes) => {
      if (recipes.length <= 0) {
        this.noRecipes = true
      }
      this.recipes = recipes;
    });
  }
}
