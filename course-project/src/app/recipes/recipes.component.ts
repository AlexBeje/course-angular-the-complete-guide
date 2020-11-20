import { Component } from '@angular/core';
import { RecepieModel } from './recepie.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  recipies: RecepieModel[] = [
    new RecepieModel(
      'Test recipe 1',
      'This is simply a test 1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new RecepieModel(
      'Test recipe 2',
      'This is simply a test 2',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg'
    ),
  ];

  selectedRecipe: RecepieModel;
}
