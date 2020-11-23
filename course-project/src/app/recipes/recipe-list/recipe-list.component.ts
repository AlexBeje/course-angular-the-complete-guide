import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recepie.model';
import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelect(recepieEl) {
    this.selectedRecipe.emit(recepieEl);
  }
}
