import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: Recipe[] = [];
  // isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRecipes(5).subscribe({
      next: (recipes) => {
        this.recipes = recipes;

        // setTimeout(() => {
        //   this.isLoading = false;
        // }, 2000);
      },
      error: (err) => {
        // this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }
}
