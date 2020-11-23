import { Component, ElementRef, ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/recipes/services/recipe/recipe.service';

import { IngredientModel } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient() {
    let ingName = this.nameInput.nativeElement.value;
    let ingAmmount = this.amountInput.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingAmmount);
    this.shoppingListService.addNewIngedient(newIngredient);
  }

  onClearIngredients() {
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
  }
}
