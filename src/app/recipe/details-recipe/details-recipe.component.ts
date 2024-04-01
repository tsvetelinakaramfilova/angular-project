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
  isLogging: boolean = false;
  isAuthor: boolean = false;
  recipeId: string = "";
  author: string = "";
  like: boolean = false;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const { _id } = this.userService.user! || {};

    this.activeRoute.params.subscribe((data) => {
      this.recipeId = data['recipeId'];

      this.apiService.getRecipe(this.recipeId).subscribe((recipe) => {
        this.recipe = recipe;
        this.author = recipe.userId.username;

        this.isLogging = this.userService.isLogged

        if (_id != undefined && recipe.userId._id! === _id) {
          this.isAuthor = true;
        }

        if (recipe.likedList?.some(user => user._id === _id)) {
          this.like = true;
        }
      });
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  deleteRecipe() {
    return
  }

  likeRecipe() {
    this.apiService.likeRecipe(this.recipeId)
      .subscribe(() => {
        window.location.reload();
      });
  }

  dislikeRecipe() {
    this.apiService.dislikeRecipe(this.recipeId)
      .subscribe(() => {
        window.location.reload();
      })
  }
}
