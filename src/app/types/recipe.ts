import { Data } from "@angular/router";
import { User } from "./user";

export interface Recipe {
    id: string;
    name: string;
    category: string;
    products: Products[];
    image: string;
    description: string;
    likedList: User[];
    createdAt: Date,
    owner: User;
    comments: Comments[]
}

interface Products {
    quantity: number;
    product: string;
}

export interface Comments {
    descriptionComment: string;
    createdAt: Data;
    owner: User;
}
