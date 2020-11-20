import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

import { IngredientModel } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @Output() newIngedient = new EventEmitter<IngredientModel>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  onAddIngredient() {
    let ingredientName = this.nameInput.nativeElement.value;
    let ingredientAmount = this.amountInput.nativeElement.value;
    if (ingredientName && ingredientAmount) {
      this.newIngedient.emit({
        name: ingredientName,
        amount: ingredientAmount,
      });
    }
  }

  onClearIngredients() {
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
  }
}
