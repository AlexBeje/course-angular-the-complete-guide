import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../recepie.model';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
