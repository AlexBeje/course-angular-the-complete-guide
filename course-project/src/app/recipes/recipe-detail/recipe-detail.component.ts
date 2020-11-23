import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recepie.model';
import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe) => (this.selectedRecipe = recipe)
    );
  }
}
