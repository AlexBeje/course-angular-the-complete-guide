import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from 'src/app/shared/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();

  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngedient(newIngredient: IngredientModel) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
