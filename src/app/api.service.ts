import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments, Recipe, RecipeEdit } from './types/recipe';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getMessage() {
        const { apiUrl } = environment;
        return this.http.get(`${apiUrl}/test`);
    }

    createRecipe(recipeName: string,
        category: string,
        products: { quantity: any; product: any; }[] | undefined,
        image: string,
        description: string) {

        const formattedProducts = products ? products.map((product: any) => ({
            quantity: product.quantity,
            product: product.product
        })) : [];

        return this.http.post<Recipe>(`/api/recipes`, { recipeName, category, products: formattedProducts, image, description });
    }

    updateRecipe(id: string,
        recipeName: string,
        category: string,
        products: { quantity: any; product: any; }[] | undefined,
        image: string,
        description: string) {

        const formattedProducts = products ? products.map((product: any) => ({
            quantity: product.quantity,
            product: product.product
        })) : [];

        return this.http.put<RecipeEdit>(`/api/recipes/${id}`, { recipeName, category, products: formattedProducts, image, description });
    }

    deleteRecipe(recipeId: string) {
        return this.http.delete<Recipe>(`/api/recipes/${recipeId}`);
    }

    getRecipes(limit?: number) {
        const { apiUrl } = environment;
        let url = `${apiUrl}/recipes`;

        if (limit) {
            url += `?limit=${limit}`;
        }

        return this.http.get<Recipe[]>(url);
    }

    getLastRecipes(limit?: number) {
        const { apiUrl } = environment;
        let url = `${apiUrl}/recipes/last`;

        if (limit) {
            url += `?limit=${limit}`;
        }

        return this.http.get<Recipe[]>(url);
    }

    getRecipe(id: string) {
        const { apiUrl } = environment;
        return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`)
    }

    getComments(recipeId: string) {
        const { apiUrl } = environment;
        return this.http.get<Comments>(`${apiUrl}/comments/${recipeId}`);
    }

    createComment(recipeId: string, descriptionComment: string) {
        return this.http.post<Comments>(`/api/comments`, { recipeId, descriptionComment });
    }

    deleteComment(recipeId: string, commentId: string) {
        return this.http.delete<Comments>(`/api/comments/${recipeId}/${commentId}`);
    }

    likeRecipe(recipeId: string){
        return this.http.put<Recipe>(`/api/likes/${recipeId}`, {});
    }

    dislikeRecipe(recipeId: string){
        return this.http.put<Recipe>(`/api/likes/dislikes/${recipeId}`, {});
    }
}