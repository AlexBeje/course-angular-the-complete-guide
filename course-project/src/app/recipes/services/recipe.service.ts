import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IngredientModel } from 'src/app/shared/models/ingredient.model';

import { RecipeModel } from '../models/recepie.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Test recipe 1',
      'This is simply a test 1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('Salad', 1),
        new IngredientModel('Tomatoes', 20),
      ]
    ),
    new RecipeModel(
      'Test recipe 2',
      'This is simply a test 2',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg',
      [new IngredientModel('Rice', 1), new IngredientModel('Green Peas', 2)]
    ),
  ];

  getRecipe(index) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
