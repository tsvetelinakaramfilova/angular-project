import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guards/auth.activate';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DetailsRecipeComponent } from './details-recipe/details-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'edit-recipe/:recipeId',
    component: EditRecipeComponent,
    canActivate: [AuthActivate],
  },
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: RecipesComponent },
      { path: ':recipeId', component: DetailsRecipeComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule { }
