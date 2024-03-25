import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './types/recipe';
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

    getRecipes(limit?: number) {
        const { apiUrl } = environment;
        let url = `${apiUrl}/recipes`;

        if (limit) {
            url += `?limit=${limit}`;
        }

        return this.http.get<Recipe[]>(url);
    }


    // createRecipe(recipeName: string,
    //     category: string,
    //     products: [{}],
    //     image: string,
    //     description: string) {
    //     // return this.http.get(
    //     //     'http://localhost:3000/api/home');
    //     return this.http.post<Recipe>(`/api/recipes`, { recipeName, category, products, image, description });
    // }
    // createTheme(themeName: string, postText: string) {
    //     return this.http.post<Theme>(`/api/themes`, { themeName, postText });
    //   }
}