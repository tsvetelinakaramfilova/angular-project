import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Recipe } from '../types/recipe';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('divRight', [
      transition(':enter', [
        query('img',style({ transform: 'translateX(100%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0%)'}))
        ]))
      ]),
      transition(':leave', [
        query('img',style({ transform: 'translateX(0%)'})),
        query('img',
          stagger('600ms', [
            animate('1600ms', style({ transform: 'translateX(100%)'}))
        ]))
      ])
    ]),
    trigger('divLeft', [
      transition(':enter', [
        query('*',style({ transform: 'translateX(-100%)'})),
        query('*',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0%)'}))
        ]))
      ]),
      transition(':leave', [
        query('*',style({ transform: 'translateX(0%)'})),
        query('*',
          stagger('400ms', [
            animate('600ms', style({ transform: 'translateX(-100%)'}))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] | null = [];
  isLoading: boolean = true;
  haveRecipe: boolean = false;
  message: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLastRecipes(3).subscribe(recipes => {
      this.recipes = recipes;
      if(Array.isArray(recipes) && recipes.length > 0){
        this.haveRecipe = true;
      }
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
