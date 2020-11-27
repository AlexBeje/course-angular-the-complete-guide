import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IngredientModel } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    this.shoppingListService.addNewIngedient(newIngredient);
  }
}
