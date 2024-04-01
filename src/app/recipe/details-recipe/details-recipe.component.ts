import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrls: ['./details-recipe.component.css']
})
export class DetailsRecipeComponent implements OnInit {
  recipe = {} as Recipe;
  user = {} as User;
  isLoading: boolean = true;
  isAuthor: boolean = false;
  author: string = "";

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private userService: UserService) { }

  deleteRecipe(id: string) {
    return 
  }

  ngOnInit(): void {
    const { _id } = this.userService.user! || {};

    this.activeRoute.params.subscribe((data) => {
      const id = data['recipeId'];

      this.apiService.getRecipe(id).subscribe((recipe) => {
        this.recipe = recipe;
        this.author = recipe.userId.username;

        if (_id != undefined && recipe.userId._id! === _id) {
          this.isAuthor = true;
        }
      });
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
