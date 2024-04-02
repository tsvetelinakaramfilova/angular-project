import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RecipesComponent } from './recipes/recipes.component';
import { DetailsRecipeComponent } from './details-recipe/details-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { CommentComponent } from '../comment/comment.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';


@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipesComponent,
    DetailsRecipeComponent,
    EditRecipeComponent,
    CommentComponent,
    RecipesPageComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ RecipesComponent ]
})
export class RecipeModule { }