import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class RecipeModule { }
