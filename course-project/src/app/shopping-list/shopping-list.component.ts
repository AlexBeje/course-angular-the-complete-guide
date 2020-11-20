import { Component } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

  addNewIngedient(newIngredient) {
    this.ingredients.push(newIngredient);
  }
}
