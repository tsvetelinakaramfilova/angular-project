import { Recipe } from "./recipe";

export interface User {
    _id: string;
    email: string;
    username: string;
    password: string;
    img?: string;
    likedRecipes?: Recipe[];
}

export interface ProfileDetails {
    username: string;
    email: string;
    img?: string;
}

export interface ProfileInfo {
    username: string;
    email: string;
    img?: string;
    likedRecipes?: Recipe[];
}