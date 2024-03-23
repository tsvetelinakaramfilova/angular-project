import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guards/auth.activate';
import { GuestActivate } from '../guards/guest.activate';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
    {
        path: 'recipes',
        children: [
        //   { path: '', pathMatch: 'full', component: MainComponent },
        //   { path: ':themeId', component: CurrentThemeComponent },
        ],
      },
      {
        path: 'add-recipe',
        component: AddRecipeComponent,
        canActivate: [AuthActivate],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule { }
