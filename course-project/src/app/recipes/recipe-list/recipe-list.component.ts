import { Component, OnInit } from '@angular/core';
import { RecepiesModel } from '../recepies.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipies: RecepiesModel[] = [
    new RecepiesModel(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new RecepiesModel(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
