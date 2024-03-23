import { Data } from "@angular/router";
import { User } from "./user";

export interface Recipe {
    id: string;
    recipeName: string;
    category: string;
    products: Products[];
    image?: string;
    description: string;
    likedList?: User[];
    createdAt: string,
    userId: User;
    comments?: Comments[]
}

interface Products {
    quantity: number;
    product: string;
}

export interface Comments {
    descriptionComment: string;
    createdAt: string;
    userId: User;
    recipeId: Recipe;
}
