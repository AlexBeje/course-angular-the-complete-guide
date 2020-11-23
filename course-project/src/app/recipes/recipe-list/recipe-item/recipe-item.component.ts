import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../recepie.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;
  @Output() selectedRecipe = new EventEmitter<void>();

  onRecipeSelected() {
    this.selectedRecipe.emit();
  }
}
