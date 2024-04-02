import { Component } from '@angular/core';
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

  constructor(private apiService: ApiService) {}

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
}
