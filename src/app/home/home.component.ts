import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] | null = null;
  isLoading: boolean = true;
  message: any;

  constructor(private userService: UserService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });

    this.apiService.getLastRecipes(3).subscribe(recipes =>{
      this.recipes = recipes;
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
