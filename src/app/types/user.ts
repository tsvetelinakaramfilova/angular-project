export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    img?: string;
    likeRecipes?: string[];
}

export interface ProfileDetails {
    username: string;
    email: string;
    img?: string;
}