import { Component, Input, OnInit } from '@angular/core';
import { RecepieModel } from '../recepie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  @Input() recipies: RecepieModel;
}
