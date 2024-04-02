import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  @Input('recipes') recipes: Recipe[] | null = null;
}
