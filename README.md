# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Application Overview

An application has been created for two types of users - authorized and guests. Guests have the option to view the recordings in the app and authorize. After authentication, each user is allowed to add items to the available collections - recipes and comments. We have different navigation for different users.
The following is used to start the project https://github.com/tsvetelinakaramfilova/Rest-api-forAngular 

### Idea
Create a recipe site with the ability to be added by any registered user.

The following pages have been built:

### Home page
The three added items in a recipe collection are displayed. With reference to their detailed description.

### Login page
User authentication page. With link to registration page.

### Registration page
Possibility of registration for anyone by setting an email, username and password. Can also add a photo using a link. With link to login page.

### Recipes page
All available records are displayed again with a link to the recipe description. Added filter under the form of the search bar.

### Add recipe page
Only logged in users have access to it, and guests are redirected to the log in page.

### Details recipe page
Any user can access the detailed information about the recipe. After user authorization, he can add it to his favorite list and add comments regardless of whether he is its author. Only the author can edit and delete the recipe. After deleting the recipe, it is removed from the list of favorite recipes of all users and all comments about it are deleted.

### Profile page
Basic user information is displayed. By allowing him to edit his email, username and profile picture (link). After that, his spoke with saved favorite recipes is also visualized.

### 404 page
Not found page. With link to home page.