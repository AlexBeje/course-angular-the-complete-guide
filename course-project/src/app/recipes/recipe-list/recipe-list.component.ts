import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecepieModel } from '../recepie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<RecepieModel>();
  @Input() recipies: RecepieModel;

  onRecipeSelect(recepieEl) {
    this.selectedRecipe.emit(recepieEl);
  }
}
