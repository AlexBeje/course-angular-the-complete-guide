import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecepieModel } from '../../recepie.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipie: RecepieModel;
  @Output() selectedRecipe = new EventEmitter<void>();

  onRecipeSelected() {
    this.selectedRecipe.emit();
  }
}
