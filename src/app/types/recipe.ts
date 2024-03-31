import { Data } from "@angular/router";
import { User } from "./user";

export interface Recipe {
    _id: string;
    recipeName: string;
    category: string;
    products: Products[];
    image?: string;
    description: string;
    likedList?: User[];
    createdAt: string;
    userId: User;
    comments?: Comments[]
}

export interface RecipeEdit {
    recipeName: string;
    category: string;
    products: Products[];
    image?: string;
    description: string;
}


interface Products {
    quantity: number;
    product: string;
}

export interface Comments {
    _id:  string;
    descriptionComment: string;
    created_at: string;
    userId: User;
    recipeId: Recipe;
}
