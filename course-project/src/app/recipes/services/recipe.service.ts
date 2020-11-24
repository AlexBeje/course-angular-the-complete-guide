import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from 'src/app/shared/models/ingredient.model';

import { RecipeModel } from '../models/recepie.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new EventEmitter<RecipeModel>();

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
}
